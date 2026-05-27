import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { TemplateBase } from './base'

function CalendarioIcon() {
  return (
    <svg width="210" height="210" viewBox="0 0 210 210" fill="none">
      {/* Sombra */}
      <rect x="26" y="32" width="158" height="152" rx="26" fill="rgba(0,0,0,0.22)" />
      {/* Corpo branco */}
      <rect x="22" y="26" width="158" height="152" rx="26" fill="white" />
      {/* Cabeçalho azul */}
      <rect x="22" y="26" width="158" height="54" rx="26" fill="#1565C0" />
      <rect x="22" y="56" width="158" height="24" fill="#1565C0" />
      {/* Pinos */}
      <rect x="64" y="12" width="14" height="32" rx="7" fill="#FFC107" />
      <rect x="132" y="12" width="14" height="32" rx="7" fill="#FFC107" />
      {/* Texto do mês (placeholder visual) */}
      <rect x="50" y="40" width="68" height="10" rx="5" fill="rgba(255,255,255,0.55)" />
      <rect x="126" y="40" width="30" height="10" rx="5" fill="rgba(255,255,255,0.3)" />
      {/* Linha divisória dias semana */}
      <rect x="30" y="82" width="142" height="6" rx="3" fill="rgba(21,101,192,0.12)" />
      {/* Grid de dias — linha 1 */}
      <circle cx="48"  cy="106" r="10" fill="rgba(21,101,192,0.12)" />
      <circle cx="79"  cy="106" r="10" fill="rgba(21,101,192,0.12)" />
      <circle cx="110" cy="106" r="10" fill="rgba(21,101,192,0.12)" />
      <circle cx="141" cy="106" r="13" fill="#FFC107" />
      <circle cx="172" cy="106" r="10" fill="rgba(21,101,192,0.12)" />
      {/* Linha 2 */}
      <circle cx="48"  cy="138" r="10" fill="rgba(21,101,192,0.12)" />
      <circle cx="79"  cy="138" r="10" fill="rgba(21,101,192,0.12)" />
      <circle cx="110" cy="138" r="10" fill="rgba(21,101,192,0.12)" />
      <circle cx="141" cy="138" r="10" fill="rgba(21,101,192,0.12)" />
      <circle cx="172" cy="138" r="10" fill="rgba(21,101,192,0.12)" />
      {/* Linha 3 */}
      <circle cx="48"  cy="168" r="10" fill="rgba(21,101,192,0.12)" />
      <circle cx="79"  cy="168" r="10" fill="rgba(21,101,192,0.12)" />
      {/* Estrela no dia destacado */}
      <circle cx="141" cy="106" r="6" fill="rgba(255,255,255,0.5)" />
    </svg>
  )
}

interface Props { dados: DadosComunicado; logoSrc: string }

export function TemplateGenerico({ dados, logoSrc }: Props) {
  return (
    <TemplateBase
      dados={dados}
      logoSrc={logoSrc}
      icone={<CalendarioIcon />}
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
