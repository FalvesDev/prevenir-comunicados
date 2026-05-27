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

// Cache de fontes e logo para evitar I/O repetido por request
let font400: Buffer | null = null
let font600: Buffer | null = null
let font700: Buffer | null = null
let font800: Buffer | null = null
let logoCache: string | null = null

function carregarFontes() {
  const base = join(process.cwd(), 'node_modules/@fontsource/inter/files')
  if (!font400) font400 = readFileSync(join(base, 'inter-latin-400-normal.woff2'))
  if (!font600) font600 = readFileSync(join(base, 'inter-latin-600-normal.woff2'))
  if (!font700) font700 = readFileSync(join(base, 'inter-latin-700-normal.woff2'))
  if (!font800) font800 = readFileSync(join(base, 'inter-latin-800-normal.woff2'))
  return { font400: font400!, font600: font600!, font700: font700!, font800: font800! }
}

function carregarLogo(): string {
  if (!logoCache) {
    const logoBuffer = readFileSync(join(process.cwd(), 'public', 'logo_prevenir_azul.png'))
    logoCache = `data:image/png;base64,${logoBuffer.toString('base64')}`
  }
  return logoCache
}

function getTemplateElement(dados: DadosComunicado, logoSrc: string): React.ReactElement {
  const props = { dados, logoSrc }
  switch (dados.template) {
    case 'natal':    return React.createElement(TemplateNatal, props)
    case 'carnaval': return React.createElement(TemplateCarnaval, props)
    case 'pascoa':   return React.createElement(TemplatePascoa, props)
    default:         return React.createElement(TemplateGenerico, props)
  }
}

function validarDados(dados: Partial<DadosComunicado>): string | null {
  if (!dados.nomeFeriado?.trim()) return 'Nome do feriado é obrigatório'
  if (dados.tipoData === 'especificos') {
    if (!dados.diasEspecificos?.length) return 'Informe pelo menos um dia específico'
  } else {
    if (!dados.dataInicio) return 'Data de início é obrigatória'
  }
  if (!dados.dataRetorno) return 'Data de retorno é obrigatória'
  if (!dados.template) return 'Template é obrigatório'
  return null
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

    const nomeArquivo = `recesso-${dados.nomeFeriado.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}.jpg`

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
