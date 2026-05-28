import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { TemplateBase } from './base'

function ConfeteIcon() {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
      {/* Serpentinas */}
      <path d="M110 110 Q72 52 36 26" stroke="#fbbf24" strokeWidth="5" strokeLinecap="round" />
      <path d="M110 110 Q90 42 72 14" stroke="#e879f9" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M110 110 Q116 36 108 10" stroke="#22d3ee" strokeWidth="5" strokeLinecap="round" />
      <path d="M110 110 Q152 46 182 22" stroke="#f87171" strokeWidth="5" strokeLinecap="round" />
      <path d="M110 110 Q168 74 196 58" stroke="#34d399" strokeWidth="4" strokeLinecap="round" />
      <path d="M110 110 Q44 82 14 68" stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M110 110 Q148 128 190 118" stroke="#a78bfa" strokeWidth="3.5" strokeLinecap="round" />
      {/* Sombra do cone */}
      <polygon points="110,110 172,164 180,152" fill="rgba(0,0,0,0.2)" transform="translate(4,4)" />
      {/* Cone / corneta */}
      <polygon points="110,110 174,164 162,174" fill="#c026d3" />
      <polygon points="110,110 162,174 148,178" fill="#e879f9" />
      {/* Boca da corneta — brilho */}
      <circle cx="110" cy="110" r="20" fill="#fbbf24" />
      <circle cx="110" cy="110" r="13" fill="#ffe066" />
      <circle cx="105" cy="105" r="5"  fill="rgba(255,255,255,0.5)" />
      {/* Confetes */}
      <rect x="38"  y="30"  width="15" height="9"  rx="3" fill="#fbbf24" transform="rotate(28 45 34)" />
      <rect x="72"  y="14"  width="13" height="8"  rx="3" fill="#22d3ee" transform="rotate(-18 78 18)" />
      <rect x="118" y="10"  width="14" height="9"  rx="3" fill="#f87171" transform="rotate(42 125 14)" />
      <rect x="162" y="26"  width="15" height="9"  rx="3" fill="#34d399" transform="rotate(-28 169 30)" />
      <rect x="190" y="58"  width="12" height="8"  rx="3" fill="#fbbf24" transform="rotate(18 196 62)" />
      <rect x="14"  y="52"  width="13" height="8"  rx="3" fill="#e879f9" transform="rotate(-35 20 56)" />
      <rect x="30"  y="92"  width="11" height="7"  rx="3" fill="#22d3ee" transform="rotate(50 36 95)" />
      <rect x="186" y="92"  width="11" height="7"  rx="3" fill="#f87171" transform="rotate(-22 192 96)" />
      <rect x="95"  y="180" width="13" height="8"  rx="3" fill="#a78bfa" transform="rotate(15 101 184)" />
      {/* Círculos coloridos */}
      <circle cx="52"  cy="52"  r="9" fill="#fbbf24" />
      <circle cx="52"  cy="52"  r="4" fill="rgba(255,255,255,0.5)" />
      <circle cx="176" cy="42"  r="8" fill="#22d3ee" />
      <circle cx="176" cy="42"  r="3" fill="rgba(255,255,255,0.4)" />
      <circle cx="196" cy="82"  r="7" fill="#f87171" />
      <circle cx="18"  cy="78"  r="7" fill="#34d399" />
      <circle cx="104" cy="16"  r="8" fill="#e879f9" />
      <circle cx="104" cy="16"  r="3" fill="rgba(255,255,255,0.4)" />
      <circle cx="198" cy="132" r="6" fill="#a78bfa" />
      <circle cx="148" cy="194" r="6" fill="#fbbf24" />
    </svg>
  )
}

function Carnaval3D({ src }: { src: string }) {
  return (
    <img
      src={src}
      width={560}
      height={520}
      style={{ objectFit: 'contain' }}
    />
  )
}

interface Props {
  dados: DadosComunicado
  logoSrc: string
  assetSrc?: string
}

export function TemplateCarnaval({ dados, logoSrc, assetSrc }: Props) {
  return (
    <TemplateBase
      dados={dados}
      logoSrc={logoSrc}
      icone={<Carnaval3D src={assetSrc || '/carnaval-3d.png'} />}
      cores={{
        fundo:  'linear-gradient(145deg, #50108f 0%, #300868 55%, #180338 100%)',
        card:   'linear-gradient(155deg, #ffd060 0%, #fbbf24 55%, #e6a800 100%)',
        texto:  '#2d0a5a',
        dot:    '#e879f9',
        marca:  'rgba(232,121,249,0.20)',
      }}
    />
  )
}
