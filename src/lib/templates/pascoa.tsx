import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { TemplateBase } from './base'

// Ícone de ovo de Páscoa com detalhes florais
function OvoIcon() {
  return (
    <svg width="220" height="260" viewBox="0 0 80 100" fill="none">
      {/* Ovo */}
      <ellipse cx="40" cy="58" rx="30" ry="38"
        fill="rgba(249,168,212,0.12)" stroke="rgba(249,168,212,0.40)" strokeWidth="2.5" />
      {/* Faixa decorativa horizontal */}
      <path d="M11 55 Q40 62 69 55" stroke="rgba(249,168,212,0.35)" strokeWidth="2" fill="none" />
      <path d="M11 65 Q40 72 69 65" stroke="rgba(249,168,212,0.25)" strokeWidth="1.5" fill="none" />
      {/* Pontos decorativos no ovo */}
      <circle cx="28" cy="44" r="3" fill="rgba(249,168,212,0.35)" />
      <circle cx="40" cy="38" r="3.5" fill="rgba(249,168,212,0.40)" />
      <circle cx="52" cy="44" r="3" fill="rgba(249,168,212,0.35)" />
      <circle cx="33" cy="76" r="2.5" fill="rgba(249,168,212,0.30)" />
      <circle cx="47" cy="76" r="2.5" fill="rgba(249,168,212,0.30)" />
      {/* Folhas / flores decorativas ao redor */}
      <circle cx="12" cy="30" r="5" fill="rgba(167,139,250,0.30)" />
      <circle cx="18" cy="20" r="3.5" fill="rgba(167,139,250,0.25)" />
      <circle cx="68" cy="30" r="5" fill="rgba(167,139,250,0.30)" />
      <circle cx="62" cy="20" r="3.5" fill="rgba(167,139,250,0.25)" />
      <circle cx="40" cy="10" r="6" fill="rgba(249,168,212,0.30)" />
      <circle cx="40" cy="10" r="3" fill="rgba(249,168,212,0.45)" />
      {/* Estrelinhas */}
      <polygon points="8,50 9.5,55 14,55 10.5,57.5 12,62 8,59 4,62 5.5,57.5 2,55 6.5,55"
        fill="rgba(249,168,212,0.28)" />
      <polygon points="72,50 73.5,55 78,55 74.5,57.5 76,62 72,59 68,62 69.5,57.5 66,55 70.5,55"
        fill="rgba(167,139,250,0.28)" />
    </svg>
  )
}

interface Props { dados: DadosComunicado; logoSrc: string }

export function TemplatePascoa({ dados, logoSrc }: Props) {
  return (
    <TemplateBase
      dados={dados}
      logoSrc={logoSrc}
      icone={<OvoIcon />}
      cores={{
        fundo:  '#4a1085',
        card:   '#fce7f3',
        texto:  '#4a1085',
        dot:    '#f9a8d4',
        marca:  'rgba(249,168,212,0.22)',
      }}
    />
  )
}
