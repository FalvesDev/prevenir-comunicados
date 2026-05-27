import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { gerarTextoRecesso } from '@/lib/formatar-data'

export interface CoresTemplate {
  fundo: string
  card: string
  texto: string
  dot: string
  marca: string
}

interface Props {
  dados: DadosComunicado
  logoSrc: string
  cores: CoresTemplate
  icone: React.ReactElement
}

function Dots({ cor, linhas, colunas }: { cor: string; linhas: number; colunas: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {Array.from({ length: linhas }, (_, i) => (
        <div key={i} style={{ display: 'flex', gap: 10 }}>
          {Array.from({ length: colunas }, (_, j) => (
            <div key={j} style={{ display: 'flex', width: 9, height: 9, borderRadius: '50%', background: cor, opacity: 0.72 }} />
          ))}
        </div>
      ))}
    </div>
  )
}

function IconEmail({ cor }: { cor: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={cor}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function IconWhatsApp({ cor }: { cor: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={cor}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.837L0 24l6.313-1.485A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.88 9.88 0 01-5.03-1.372l-.361-.214-3.741.981 1.001-3.648-.235-.374A9.868 9.868 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106c5.42 0 9.894 4.474 9.894 9.894 0 5.42-4.474 9.894-9.894 9.894z" />
    </svg>
  )
}

function IconInstagram({ cor }: { cor: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={cor}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

export function TemplateBase({ dados, cores, icone }: Props) {
  const { paragrafo1, paragrafo2 } = gerarTextoRecesso(dados)
  const titulo = dados.nomeFeriado.toUpperCase()

  return (
    <div
      style={{
        width: 1080,
        height: 1080,
        display: 'flex',
        flexDirection: 'column',
        background: cores.fundo,
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        overflow: 'hidden',
        padding: '44px 52px',
        gap: 18,
      }}
    >
      {/* ── Bolinhas topo ── */}
      <Dots cor={cores.dot} linhas={3} colunas={15} />

      {/* ── Área central: card + ícone decorativo ── */}
      <div style={{ display: 'flex', flex: 1, gap: 24 }}>

        {/* Card amarelo principal */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            background: cores.card,
            borderRadius: 28,
            padding: '44px 50px',
            width: 590,
            gap: 22,
          }}
        >
          {/* Linha superior colorida */}
          <div style={{ display: 'flex', width: 56, height: 5, background: cores.texto, borderRadius: 3, opacity: 0.4 }} />

          {/* Título */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ display: 'flex', color: cores.texto, fontSize: 18, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase' as const, opacity: 0.6 }}>
              COMUNICADO
            </div>
            <div style={{ display: 'flex', color: cores.texto, fontSize: 34, fontWeight: 800, lineHeight: 1.15, textTransform: 'uppercase' as const, flexWrap: 'wrap' as const }}>
              {titulo || 'NOME DO FERIADO'}
            </div>
          </div>

          {/* Divisor */}
          <div style={{ display: 'flex', width: '100%', height: 1, background: cores.texto, opacity: 0.15 }} />

          {/* Parágrafos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', color: cores.texto, fontSize: 20, lineHeight: 1.65, flexWrap: 'wrap' as const, opacity: 0.9 }}>
              {paragrafo1}
            </div>
            <div style={{ display: 'flex', color: cores.texto, fontSize: 20, lineHeight: 1.65, flexWrap: 'wrap' as const, opacity: 0.9 }}>
              {paragrafo2}
            </div>
            {dados.mensagem ? (
              <div style={{ display: 'flex', color: cores.texto, fontSize: 20, lineHeight: 1.65, flexWrap: 'wrap' as const, opacity: 0.9 }}>
                {dados.mensagem}
              </div>
            ) : null}
          </div>
        </div>

        {/* Lado direito: ícone decorativo + marca d'água */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: 40,
            gap: 0,
            position: 'relative',
          }}
        >
          {/* Ícone decorativo grande */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {icone}
          </div>

          {/* Marca d'água texto */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2, marginTop: 20 }}>
            <div style={{ display: 'flex', fontSize: 52, fontWeight: 900, color: cores.marca, lineHeight: 1, letterSpacing: -1 }}>
              PREVENIR
            </div>
            <div style={{ display: 'flex', fontSize: 22, fontWeight: 600, color: cores.marca, lineHeight: 1, letterSpacing: 2 }}>
              EXAMES
            </div>
            <div style={{ display: 'flex', fontSize: 14, fontWeight: 500, color: cores.marca, lineHeight: 1, letterSpacing: 3 }}>
              COMPLEMENTARES
            </div>
          </div>
        </div>
      </div>

      {/* ── Card de contatos ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: cores.card,
          borderRadius: 24,
          padding: '20px 52px',
          gap: 14,
        }}
      >
        <div style={{ display: 'flex', color: cores.texto, fontSize: 13, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase' as const, opacity: 0.55 }}>
          CONTATOS
        </div>

        <div style={{ display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap' as const, justifyContent: 'center' }}>
          {dados.email ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ display: 'flex', width: 30, height: 30, borderRadius: '50%', background: cores.texto, alignItems: 'center', justifyContent: 'center' }}>
                <IconEmail cor={cores.card} />
              </div>
              <div style={{ display: 'flex', color: cores.texto, fontSize: 16, fontWeight: 500 }}>{dados.email}</div>
            </div>
          ) : null}
          {dados.telefone ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ display: 'flex', width: 30, height: 30, borderRadius: '50%', background: cores.texto, alignItems: 'center', justifyContent: 'center' }}>
                <IconWhatsApp cor={cores.card} />
              </div>
              <div style={{ display: 'flex', color: cores.texto, fontSize: 16, fontWeight: 500 }}>{dados.telefone}</div>
            </div>
          ) : null}
          {dados.instagram ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ display: 'flex', width: 30, height: 30, borderRadius: '50%', background: cores.texto, alignItems: 'center', justifyContent: 'center' }}>
                <IconInstagram cor={cores.card} />
              </div>
              <div style={{ display: 'flex', color: cores.texto, fontSize: 16, fontWeight: 500 }}>{dados.instagram}</div>
            </div>
          ) : null}
        </div>
      </div>

      {/* ── Bolinhas rodapé ── */}
      <Dots cor={cores.dot} linhas={3} colunas={15} />
    </div>
  )
}
