import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { TemplateBase } from './base'

function SinoIcon() {
  return (
    <svg width="210" height="230" viewBox="0 0 210 230" fill="none">
      {/* Brilho de fundo */}
      <ellipse cx="105" cy="120" rx="72" ry="80" fill="rgba(244,196,48,0.18)" />
      {/* Sombra do sino */}
      <path d="M105 38 C66 38 42 68 42 106 L42 150 L168 150 L168 106 C168 68 144 38 105 38 Z"
        fill="rgba(0,0,0,0.22)" transform="translate(4,5)" />
      {/* Corpo do sino */}
      <path d="M105 38 C66 38 42 68 42 106 L42 150 L168 150 L168 106 C168 68 144 38 105 38 Z"
        fill="#f4c430" />
      {/* Reflexo/brilho no sino */}
      <path d="M105 45 C80 45 60 68 56 100 C68 92 85 86 105 84 C125 86 142 92 154 100 C150 68 130 45 105 45 Z"
        fill="rgba(255,255,255,0.28)" />
      {/* Reflexo lateral pequeno */}
      <ellipse cx="72" cy="98" rx="10" ry="16" fill="rgba(255,255,255,0.18)" />
      {/* Base do sino */}
      <rect x="32" y="148" width="146" height="22" rx="11" fill="#e6b420" />
      {/* Haste superior */}
      <rect x="97" y="14" width="16" height="28" rx="8" fill="#e6b420" />
      {/* Argola */}
      <path d="M93 16 Q105 4 117 16" stroke="#f4c430" strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* Badalo */}
      <ellipse cx="105" cy="176" rx="16" ry="16" fill="#e6b420" />
      <ellipse cx="105" cy="176" rx="10" ry="10" fill="#c89a10" />
      <ellipse cx="100" cy="171" rx="4" ry="3" fill="rgba(255,255,255,0.25)" />
      {/* Detalhe no sino */}
      <path d="M42 130 Q105 140 168 130" stroke="rgba(230,180,32,0.6)" strokeWidth="3" fill="none" />
      {/* Folha de azevinho */}
      <ellipse cx="148" cy="60" rx="18" ry="9" fill="#1a7a2e" transform="rotate(-28 148 60)" />
      <ellipse cx="162" cy="52" rx="16" ry="8" fill="#1d8f35" transform="rotate(22 162 52)" />
      <ellipse cx="154" cy="70" rx="14" ry="7" fill="#1a7a2e" transform="rotate(-10 154 70)" />
      {/* Frutinhos */}
      <circle cx="152" cy="56" r="7" fill="#cc2222" />
      <circle cx="164" cy="62" r="6" fill="#dd3333" />
      <circle cx="156" cy="66" r="5" fill="#bb1111" />
      {/* Estrelas decorativas */}
      <circle cx="30"  cy="60"  r="6" fill="rgba(244,196,48,0.65)" />
      <circle cx="30"  cy="60"  r="2" fill="rgba(255,255,255,0.7)" />
      <circle cx="180" cy="55"  r="5" fill="rgba(244,196,48,0.55)" />
      <circle cx="22"  cy="95"  r="4" fill="rgba(244,196,48,0.45)" />
      <circle cx="188" cy="90"  r="4" fill="rgba(244,196,48,0.45)" />
      <circle cx="38"  cy="125" r="3" fill="rgba(244,196,48,0.35)" />
    </svg>
  )
}

function Natal3D({ src }: { src: string }) {
  return (
    <img
      src={src}
      width={540}
      height={540}
      style={{ objectFit: 'contain' }}
    />
  )
}

interface Props {
  dados: DadosComunicado
  logoSrc: string
  assetSrc?: string
}

export function TemplateNatal({ dados, logoSrc, assetSrc }: Props) {
  return (
    <TemplateBase
      dados={dados}
      logoSrc={logoSrc}
      icone={<Natal3D src={assetSrc || '/natal-3d.png'} />}
      cores={{
        fundo:  'linear-gradient(145deg, #0d4a24 0%, #082e16 55%, #041508 100%)',
        card:   'linear-gradient(155deg, #ffe066 0%, #f4c430 55%, #e6b010 100%)',
        texto:  '#0a2e1a',
        dot:    '#f4c430',
        marca:  'rgba(244,196,48,0.18)',
      }}
    />
  )
}
