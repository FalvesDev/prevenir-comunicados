import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { TemplateBase } from './base'

interface Props {
  dados: DadosComunicado
  logoSrc: string
}

export function TemplateNatal({ dados, logoSrc }: Props) {
  return (
    <TemplateBase
      dados={dados}
      logoSrc={logoSrc}
      cores={{
        fundo:  '#0a2e1a',                    // Verde floresta escuro
        card:   '#f4c430',                    // Dourado natalino
        texto:  '#0a2e1a',                    // Verde escuro no card dourado
        dot:    '#f4c430',                    // Bolinhas douradas
        marca:  'rgba(244,196,48,0.08)',      // Marca d'água dourada discreta
      }}
    />
  )
}
