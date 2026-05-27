import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { TemplateBase } from './base'

interface Props {
  dados: DadosComunicado
  logoSrc: string
}

export function TemplateCarnaval({ dados, logoSrc }: Props) {
  return (
    <TemplateBase
      dados={dados}
      logoSrc={logoSrc}
      cores={{
        fundo:  '#2d0a5a',                    // Roxo profundo festivo
        card:   '#fbbf24',                    // Amarelo festivo (carnaval usa amarelo também)
        texto:  '#2d0a5a',                    // Roxo escuro no card amarelo
        dot:    '#e879f9',                    // Bolinhas magenta
        marca:  'rgba(232,121,249,0.10)',     // Marca d'água magenta discreta
      }}
    />
  )
}
