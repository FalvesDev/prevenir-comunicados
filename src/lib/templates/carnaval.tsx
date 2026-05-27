import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { TemplateBase } from './base'

// Ícone de confete / explosão festiva — tema carnaval
function ConfeteIcon() {
  return (
    <svg width="260" height="260" viewBox="0 0 100 100" fill="none">
      {/* Círculo central */}
      <circle cx="50" cy="50" r="12" fill="rgba(232,121,249,0.25)" stroke="rgba(232,121,249,0.45)" strokeWidth="2" />
      {/* Raios */}
      <line x1="50" y1="8"  x2="50" y2="34" stroke="rgba(232,121,249,0.45)" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="66" x2="50" y2="92" stroke="rgba(232,121,249,0.45)" strokeWidth="3" strokeLinecap="round" />
      <line x1="8"  y1="50" x2="34" y2="50" stroke="rgba(232,121,249,0.40)" strokeWidth="3" strokeLinecap="round" />
      <line x1="66" y1="50" x2="92" y2="50" stroke="rgba(232,121,249,0.40)" strokeWidth="3" strokeLinecap="round" />
      <line x1="21" y1="21" x2="39" y2="39" stroke="rgba(232,121,249,0.35)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="61" y1="61" x2="79" y2="79" stroke="rgba(232,121,249,0.35)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="79" y1="21" x2="61" y2="39" stroke="rgba(232,121,249,0.35)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="39" y1="61" x2="21" y2="79" stroke="rgba(232,121,249,0.35)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Bolas coloridas nas pontas */}
      <circle cx="50"  cy="6"  r="5" fill="rgba(251,191,36,0.70)" />
      <circle cx="50"  cy="94" r="5" fill="rgba(34,211,238,0.70)" />
      <circle cx="6"   cy="50" r="5" fill="rgba(248,113,113,0.70)" />
      <circle cx="94"  cy="50" r="5" fill="rgba(134,239,172,0.70)" />
      <circle cx="18"  cy="18" r="4" fill="rgba(251,191,36,0.55)" />
      <circle cx="82"  cy="82" r="4" fill="rgba(34,211,238,0.55)" />
      <circle cx="82"  cy="18" r="4" fill="rgba(248,113,113,0.55)" />
      <circle cx="18"  cy="82" r="4" fill="rgba(134,239,172,0.55)" />
      {/* Confetes flutuantes */}
      <rect x="28" y="14" width="6" height="6" rx="1" fill="rgba(251,191,36,0.45)" transform="rotate(25 31 17)" />
      <rect x="65" y="14" width="5" height="5" rx="1" fill="rgba(34,211,238,0.45)" transform="rotate(-15 67 16)" />
      <rect x="14" y="65" width="5" height="5" rx="1" fill="rgba(232,121,249,0.45)" transform="rotate(30 16 67)" />
      <rect x="78" y="66" width="6" height="6" rx="1" fill="rgba(248,113,113,0.45)" transform="rotate(-20 81 69)" />
    </svg>
  )
}

interface Props { dados: DadosComunicado; logoSrc: string }

export function TemplateCarnaval({ dados, logoSrc }: Props) {
  return (
    <TemplateBase
      dados={dados}
      logoSrc={logoSrc}
      icone={<ConfeteIcon />}
      cores={{
        fundo:  '#2d0a5a',
        card:   '#fbbf24',
        texto:  '#2d0a5a',
        dot:    '#e879f9',
        marca:  'rgba(232,121,249,0.12)',
      }}
    />
  )
}
