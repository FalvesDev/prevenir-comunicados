import { NextRequest, NextResponse } from 'next/server'
import satori from 'satori'
import sharp from 'sharp'
import { readFileSync } from 'fs'
import { join } from 'path'
import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { TemplateGenerico } from '@/lib/templates/generico'
import { TemplateNatal } from '@/lib/templates/natal'
import { TemplateCarnaval } from '@/lib/templates/carnaval'
import { TemplatePascoa } from '@/lib/templates/pascoa'
import { TemplateNorma, TemplateNormaPrazo, TemplateNormaChecklist } from '@/lib/templates/norma'
import type { TipoTemplateRecesso } from '@/types/comunicado'

// Cache de fontes e logo para evitar I/O repetido por request
let font400: Buffer | null = null
let font600: Buffer | null = null
let font700: Buffer | null = null
let font800: Buffer | null = null
let logoCache: string | null = null
const assetCache = new Map<string, string>()

function carregarFontes() {
  const base = join(process.cwd(), 'public', 'fonts')
  if (!font400) font400 = readFileSync(join(base, 'inter-latin-400-normal.woff'))
  if (!font600) font600 = readFileSync(join(base, 'inter-latin-600-normal.woff'))
  if (!font700) font700 = readFileSync(join(base, 'inter-latin-700-normal.woff'))
  if (!font800) font800 = readFileSync(join(base, 'inter-latin-800-normal.woff'))
  return { font400: font400!, font600: font600!, font700: font700!, font800: font800! }
}

function carregarLogo(): string {
  if (!logoCache) {
    const logoBuffer = readFileSync(join(process.cwd(), 'public', 'logo_prevenir_azul.png'))
    logoCache = `data:image/png;base64,${logoBuffer.toString('base64')}`
  }
  return logoCache
}

function carregarAsset(nomeArquivo: string): string {
  const cached = assetCache.get(nomeArquivo)
  if (cached) return cached

  const assetBuffer = readFileSync(join(process.cwd(), 'public', nomeArquivo))
  const asset = `data:image/png;base64,${assetBuffer.toString('base64')}`
  assetCache.set(nomeArquivo, asset)
  return asset
}

function getAssetTemplate(template: DadosComunicado['template']): string {
  switch (template) {
    case 'natal': return carregarAsset('natal-3d.png')
    case 'carnaval': return carregarAsset('carnaval-3d.png')
    case 'pascoa': return carregarAsset('pascoa-3d.png')
    default: return carregarAsset('megafone-3d.png')
  }
}

function getTemplateElement(dados: DadosComunicado, logoSrc: string): React.ReactElement {
  if (dados.tipoComunicado === 'norma') {
    const props = { dados, logoSrc, medicoSrc: carregarAsset('medico-norma.png') }
    switch (dados.template) {
      case 'normaPrazo': return React.createElement(TemplateNormaPrazo, props)
      case 'normaChecklist': return React.createElement(TemplateNormaChecklist, props)
      default: return React.createElement(TemplateNorma, props)
    }
  }

  const assetSrc = getAssetTemplate(dados.template as TipoTemplateRecesso)
  const props = { dados, logoSrc, assetSrc, megafoneSrc: assetSrc }
  switch (dados.template) {
    case 'natal':    return React.createElement(TemplateNatal, props)
    case 'carnaval': return React.createElement(TemplateCarnaval, props)
    case 'pascoa':   return React.createElement(TemplatePascoa, props)
    default:         return React.createElement(TemplateGenerico, props)
  }
}

function validarDados(dados: Partial<DadosComunicado>): string | null {
  if (!dados.nomeFeriado?.trim()) return 'Nome do feriado é obrigatório'
  if (dados.tipoComunicado === 'norma') {
    if (!dados.prazoNorma?.trim()) return 'Prazo é obrigatório'
    if (dados.template === 'normaChecklist' && ![dados.checklistItem1, dados.checklistItem2, dados.checklistItem3].some((item) => item?.trim())) {
      return 'Informe pelo menos um item do checklist'
    }
    return null
  }
  if (dados.tipoData === 'especificos') {
    if (!dados.diasEspecificos?.length) return 'Informe pelo menos um dia específico'
    if (dados.diasEspecificos.length > 5) return 'Informe no máximo 5 dias específicos'
  } else {
    if (!dados.dataInicio) return 'Data de início é obrigatória'
  }
  if (!dados.dataRetorno) return 'Data de retorno é obrigatória'
  if (!dados.template) return 'Template é obrigatório'
  return null
}

function criarSlugArquivo(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export async function POST(request: NextRequest) {
  try {
    const dados: DadosComunicado = await request.json()

    const erro = validarDados(dados)
    if (erro) {
      return NextResponse.json({ erro }, { status: 400 })
    }

    const { font400, font600, font700, font800 } = carregarFontes()
    const logoSrc = carregarLogo()
    const element = getTemplateElement(dados, logoSrc)

    const svg = await satori(element, {
      width: 1080,
      height: 1080,
      fonts: [
        { name: 'Inter', data: font400, weight: 400, style: 'normal' },
        { name: 'Inter', data: font600, weight: 600, style: 'normal' },
        { name: 'Inter', data: font700, weight: 700, style: 'normal' },
        { name: 'Inter', data: font800, weight: 800, style: 'normal' },
      ],
    })

    const jpg = await sharp(Buffer.from(svg))
      .jpeg({ quality: 95, mozjpeg: true })
      .toBuffer()

    const prefixoArquivo = dados.tipoComunicado === 'norma' ? 'norma' : 'recesso'
    const nomeArquivo = `${prefixoArquivo}-${criarSlugArquivo(dados.nomeFeriado)}.jpg`

    return new NextResponse(jpg.buffer.slice(jpg.byteOffset, jpg.byteOffset + jpg.byteLength) as ArrayBuffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Content-Disposition': `attachment; filename="${nomeArquivo}"`,
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    console.error('[gerar-arte] Erro:', err)
    return NextResponse.json(
      { erro: 'Erro interno ao gerar a arte. Tente novamente.' },
      { status: 500 }
    )
  }
}
