import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { TemplateBase } from './base'

interface Props {
  dados: DadosComunicado
  logoSrc: string
}

export function TemplateGenerico({ dados, logoSrc }: Props) {
  return (
    <TemplateBase
      dados={dados}
      logoSrc={logoSrc}
      cores={{
        fundo:  '#1565C0',                    // Azul royal Prevenir
        card:   '#FFC107',                    // Amarelo âmbar
        texto:  '#0D47A1',                    // Navy azul escuro
        dot:    '#FFC107',                    // Bolinhas amarelas
        marca:  'rgba(255,255,255,0.09)',     // Marca d'água branca discreta
      }}
    />
  )
}
