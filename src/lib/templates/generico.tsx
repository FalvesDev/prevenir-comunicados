import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { TemplateBase } from './base'

// Ícone de calendário — fiel ao tema "comunicado/feriado"
function CalendarioIcon() {
  return (
    <svg width="260" height="260" viewBox="0 0 100 100" fill="none">
      {/* Corpo do calendário */}
      <rect x="8" y="14" width="84" height="76" rx="10"
        stroke="rgba(255,255,255,0.22)" strokeWidth="3"
        fill="rgba(255,255,255,0.06)" />
      {/* Cabeçalho azul mais claro */}
      <rect x="8" y="14" width="84" height="26" rx="10"
        fill="rgba(255,255,255,0.12)" />
      <rect x="8" y="30" width="84" height="10"
        fill="rgba(255,255,255,0.12)" />
      {/* Linha divisória */}
      <line x1="8" y1="40" x2="92" y2="40"
        stroke="rgba(255,255,255,0.20)" strokeWidth="2" />
      {/* Pinos de suspensão */}
      <rect x="30" y="8" width="6" height="14" rx="3"
        fill="rgba(255,255,255,0.30)" />
      <rect x="64" y="8" width="6" height="14" rx="3"
        fill="rgba(255,255,255,0.30)" />
      {/* Grid de dias */}
      <circle cx="26" cy="54" r="4" fill="rgba(255,255,255,0.25)" />
      <circle cx="43" cy="54" r="4" fill="rgba(255,255,255,0.25)" />
      <circle cx="60" cy="54" r="4" fill="rgba(255,255,255,0.25)" />
      <circle cx="77" cy="54" r="4" fill="rgba(255,255,255,0.25)" />
      <circle cx="26" cy="68" r="4" fill="rgba(255,255,255,0.25)" />
      <circle cx="43" cy="68" r="4" fill="rgba(255,255,255,0.25)" />
      {/* Dia destacado */}
      <circle cx="60" cy="68" r="7" fill="rgba(255,255,255,0.35)" />
      <circle cx="77" cy="68" r="4" fill="rgba(255,255,255,0.25)" />
      <circle cx="26" cy="82" r="4" fill="rgba(255,255,255,0.25)" />
      <circle cx="43" cy="82" r="4" fill="rgba(255,255,255,0.25)" />
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
        fundo:  '#1565C0',
        card:   '#FFC107',
        texto:  '#0D47A1',
        dot:    '#FFC107',
        marca:  'rgba(255,255,255,0.12)',
      }}
    />
  )
}
