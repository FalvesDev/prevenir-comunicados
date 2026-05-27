import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { TemplateBase } from './base'

interface Props {
  dados: DadosComunicado
  logoSrc: string
}

export function TemplatePascoa({ dados, logoSrc }: Props) {
  return (
    <TemplateBase
      dados={dados}
      logoSrc={logoSrc}
      cores={{
        fundo:  '#4a1085',                    // Violeta suave primaveril
        card:   '#fce7f3',                    // Rosa bem claro (pastel)
        texto:  '#4a1085',                    // Violeta escuro no card rosa
        dot:    '#f9a8d4',                    // Bolinhas rosa
        marca:  'rgba(249,168,212,0.10)',     // Marca d'água rosa discreta
      }}
    />
  )
}
