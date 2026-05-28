import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { TemplateBase } from './base'

function Megafone3D({ src }: { src: string }) {
  return (
    <img
      src={src}
      width={560}
      height={560}
      style={{
        objectFit: 'contain',
      }}
    />
  )
}

interface Props {
  dados: DadosComunicado
  logoSrc: string
  megafoneSrc?: string
}

export function TemplateGenerico({ dados, logoSrc, megafoneSrc }: Props) {
  return (
    <TemplateBase
      dados={dados}
      logoSrc={logoSrc}
      icone={<Megafone3D src={megafoneSrc || '/megafone-3d.png'} />}
      cores={{
        fundo:  'linear-gradient(145deg, #1a70d4 0%, #1055a8 45%, #083580 100%)',
        card:   'linear-gradient(155deg, #FFD54F 0%, #FFC107 55%, #FFB300 100%)',
        texto:  '#0D47A1',
        dot:    '#FFC107',
        marca:  'rgba(255,255,255,0.14)',
      }}
    />
  )
}
