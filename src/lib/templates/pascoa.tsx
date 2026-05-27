import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { TemplateBase } from './base'

function OvoIcon() {
  return (
    <svg width="210" height="240" viewBox="0 0 210 240" fill="none">
      {/* Sombra do ovo */}
      <ellipse cx="109" cy="138" rx="62" ry="78" fill="rgba(0,0,0,0.20)" />
      {/* Corpo do ovo */}
      <ellipse cx="105" cy="134" rx="62" ry="78" fill="#f9a8d4" />
      {/* Reflexo/brilho */}
      <ellipse cx="90"  cy="96"  rx="28" ry="42" fill="rgba(255,255,255,0.32)" />
      <ellipse cx="82"  cy="82"  rx="10" ry="16" fill="rgba(255,255,255,0.20)" />
      {/* Faixa central */}
      <path d="M45 122 Q105 136 165 122 L165 146 Q105 162 45 146 Z" fill="#c084fc" />
      {/* Pontinhos no topo do ovo */}
      <circle cx="76"  cy="88"  r="8"  fill="rgba(192,132,252,0.72)" />
      <circle cx="105" cy="76"  r="9"  fill="rgba(192,132,252,0.72)" />
      <circle cx="134" cy="88"  r="8"  fill="rgba(192,132,252,0.72)" />
      {/* Pontinhos na faixa */}
      <circle cx="70"  cy="134" r="6"  fill="rgba(255,255,255,0.45)" />
      <circle cx="105" cy="136" r="7"  fill="rgba(255,255,255,0.50)" />
      <circle cx="140" cy="134" r="6"  fill="rgba(255,255,255,0.45)" />
      {/* Pontinhos abaixo da faixa */}
      <circle cx="72"  cy="168" r="7"  fill="rgba(249,168,212,0.85)" />
      <circle cx="138" cy="168" r="7"  fill="rgba(249,168,212,0.85)" />
      <circle cx="105" cy="180" r="6"  fill="rgba(192,132,252,0.60)" />
      {/* Laço no topo */}
      <ellipse cx="84"  cy="58" rx="17" ry="11" fill="#c084fc" transform="rotate(-22 84 58)" />
      <ellipse cx="126" cy="58" rx="17" ry="11" fill="#c084fc" transform="rotate(22 126 58)" />
      <circle  cx="105" cy="60" r="11" fill="#e879f9" />
      <circle  cx="102" cy="57" r="4"  fill="rgba(255,255,255,0.35)" />
      {/* Florezinhas decorativas */}
      <circle cx="26"  cy="106" r="10" fill="rgba(249,168,212,0.50)" />
      <circle cx="26"  cy="106" r="5"  fill="rgba(249,168,212,0.90)" />
      <circle cx="26"  cy="106" r="2"  fill="white" />
      <circle cx="184" cy="106" r="10" fill="rgba(192,132,252,0.50)" />
      <circle cx="184" cy="106" r="5"  fill="rgba(192,132,252,0.90)" />
      <circle cx="184" cy="106" r="2"  fill="white" />
      <circle cx="20"  cy="145" r="7"  fill="rgba(249,168,212,0.40)" />
      <circle cx="20"  cy="145" r="3"  fill="rgba(249,168,212,0.70)" />
      <circle cx="190" cy="145" r="7"  fill="rgba(192,132,252,0.40)" />
      <circle cx="190" cy="145" r="3"  fill="rgba(192,132,252,0.70)" />
      {/* Estrelinhas */}
      <circle cx="28"  cy="62"  r="6"  fill="rgba(249,168,212,0.65)" />
      <circle cx="182" cy="62"  r="5"  fill="rgba(192,132,252,0.65)" />
      <circle cx="14"  cy="82"  r="4"  fill="rgba(249,168,212,0.50)" />
      <circle cx="196" cy="82"  r="4"  fill="rgba(192,132,252,0.50)" />
      {/* Estrela de destaque */}
      <polygon points="105,12 108,22 118,22 110,28 113,38 105,32 97,38 100,28 92,22 102,22"
        fill="rgba(192,132,252,0.55)" />
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
        fundo:  'linear-gradient(145deg, #6b18b0 0%, #4a0d88 50%, #280558 100%)',
        card:   'linear-gradient(155deg, #fde8f0 0%, #fce7f3 55%, #f8d4e8 100%)',
        texto:  '#4a1085',
        dot:    '#f9a8d4',
        marca:  'rgba(249,168,212,0.20)',
      }}
    />
  )
}
