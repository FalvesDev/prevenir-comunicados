import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { TemplateBase } from './base'

// Ícone de sino — tema natalino
function SinoIcon() {
  return (
    <svg width="240" height="260" viewBox="0 0 100 110" fill="none">
      {/* Sino */}
      <path d="M50 10 C28 10 18 30 18 55 L18 72 L82 72 L82 55 C82 30 72 10 50 10 Z"
        fill="rgba(244,196,48,0.18)" stroke="rgba(244,196,48,0.40)" strokeWidth="2.5" />
      {/* Base do sino */}
      <rect x="12" y="70" width="76" height="10" rx="5"
        fill="rgba(244,196,48,0.28)" stroke="rgba(244,196,48,0.40)" strokeWidth="2" />
      {/* Cabo superior */}
      <line x1="50" y1="2" x2="50" y2="12"
        stroke="rgba(244,196,48,0.50)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="2" r="4" fill="rgba(244,196,48,0.45)" />
      {/* Badalo */}
      <circle cx="50" cy="82" r="7"
        fill="rgba(244,196,48,0.30)" stroke="rgba(244,196,48,0.45)" strokeWidth="2" />
      {/* Brilhos */}
      <circle cx="34" cy="40" r="3" fill="rgba(244,196,48,0.30)" />
      <circle cx="40" cy="28" r="2" fill="rgba(244,196,48,0.25)" />
      {/* Estrelas decorativas */}
      <polygon points="72,18 74,24 80,24 75,28 77,34 72,30 67,34 69,28 64,24 70,24"
        fill="rgba(244,196,48,0.35)" />
      <polygon points="22,30 23.5,35 28,35 24.5,37.5 26,42 22,39 18,42 19.5,37.5 16,35 20.5,35"
        fill="rgba(244,196,48,0.25)" />
    </svg>
  )
}

interface Props { dados: DadosComunicado; logoSrc: string }

export function TemplateNatal({ dados, logoSrc }: Props) {
  return (
    <TemplateBase
      dados={dados}
      logoSrc={logoSrc}
      icone={<SinoIcon />}
      cores={{
        fundo:  '#0a2e1a',
        card:   '#f4c430',
        texto:  '#0a2e1a',
        dot:    '#f4c430',
        marca:  'rgba(244,196,48,0.10)',
      }}
    />
  )
}
