import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { formatarData, formatarPeriodo } from '@/lib/formatar-data'

interface Props {
  dados: DadosComunicado
  logoSrc: string
}

export function TemplatePascoa({ dados, logoSrc }: Props) {
  const periodo = formatarPeriodo(dados.dataInicio, dados.dataFim)
  const retorno = formatarData(dados.dataRetorno)
  const rosa = '#f9a8d4'

  return (
    <div
      style={{
        width: 1080,
        height: 1080,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(155deg, #3b0764 0%, #6d28d9 40%, #7c3aed 75%, #a855f7 100%)',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        overflow: 'hidden',
        padding: '64px 80px',
      }}
    >
      {/* Efeito de luz suave */}
      <div style={{ position: 'absolute', top: 200, left: 200, width: 500, height: 500, borderRadius: '50%', background: 'rgba(249,168,212,0.07)', display: 'flex' }} />
      <div style={{ position: 'absolute', top: -160, right: -160, width: 500, height: 500, borderRadius: '50%', background: 'rgba(167,139,250,0.10)', display: 'flex' }} />
      <div style={{ position: 'absolute', bottom: -120, left: -120, width: 420, height: 420, borderRadius: '50%', background: 'rgba(249,168,212,0.07)', display: 'flex' }} />

      {/* Bolinhas decorativas pastéis */}
      <div style={{ position: 'absolute', top: 100, left: 100, width: 22, height: 22, borderRadius: '50%', background: rosa, display: 'flex', opacity: 0.55 }} />
      <div style={{ position: 'absolute', top: 180, left: 220, width: 14, height: 14, borderRadius: '50%', background: '#c4b5fd', display: 'flex', opacity: 0.5 }} />
      <div style={{ position: 'absolute', top: 80, right: 160, width: 18, height: 18, borderRadius: '50%', background: rosa, display: 'flex', opacity: 0.5 }} />
      <div style={{ position: 'absolute', top: 180, right: 80, width: 12, height: 12, borderRadius: '50%', background: '#ddd6fe', display: 'flex', opacity: 0.45 }} />
      <div style={{ position: 'absolute', bottom: 160, left: 90, width: 20, height: 20, borderRadius: '50%', background: '#c4b5fd', display: 'flex', opacity: 0.5 }} />
      <div style={{ position: 'absolute', bottom: 120, right: 100, width: 16, height: 16, borderRadius: '50%', background: rosa, display: 'flex', opacity: 0.45 }} />

      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.93)', borderRadius: 20, padding: '14px 44px' }}>
          <img src={logoSrc} style={{ height: 58, objectFit: 'contain' }} alt="Prevenir" />
        </div>
      </div>

      {/* Conteúdo central */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center', paddingTop: 24, paddingBottom: 24 }}>
        {/* Ornamento floral */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
          <div style={{ display: 'flex', width: 50, height: 2, background: rosa, opacity: 0.5 }} />
          <div style={{ display: 'flex', width: 10, height: 10, borderRadius: '50%', background: rosa, opacity: 0.75 }} />
          <div style={{ display: 'flex', width: 50, height: 2, background: rosa, opacity: 0.5 }} />
        </div>

        <div style={{ display: 'flex', color: rosa, fontSize: 21, letterSpacing: 6, marginBottom: 22, textTransform: 'uppercase' as const, opacity: 0.88 }}>
          Comunicado de Recesso
        </div>

        <div style={{ display: 'flex', color: '#ffffff', fontSize: 86, fontWeight: 700, textAlign: 'center' as const, lineHeight: 1.05, marginBottom: 12, textTransform: 'uppercase' as const, maxWidth: 900, flexWrap: 'wrap' as const, justifyContent: 'center' }}>
          {dados.nomeFeriado || 'Páscoa'}
        </div>

        {/* Ornamento inferior */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 38 }}>
          <div style={{ display: 'flex', width: 50, height: 2, background: rosa, opacity: 0.5 }} />
          <div style={{ display: 'flex', width: 10, height: 10, borderRadius: '50%', background: rosa, opacity: 0.75 }} />
          <div style={{ display: 'flex', width: 50, height: 2, background: rosa, opacity: 0.5 }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ display: 'flex', width: 8, height: 8, borderRadius: '50%', background: rosa, opacity: 0.7 }} />
            <div style={{ display: 'flex', color: 'rgba(255,255,255,0.78)', fontSize: 27 }}>
              Recesso: {periodo}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ display: 'flex', width: 8, height: 8, borderRadius: '50%', background: '#ffffff' }} />
            <div style={{ display: 'flex', color: '#ffffff', fontSize: 31, fontWeight: 600 }}>
              Retorno: {retorno}
            </div>
          </div>
        </div>

        {dados.mensagem ? (
          <div style={{ display: 'flex', marginTop: 48, padding: '24px 52px', background: 'rgba(249,168,212,0.08)', borderRadius: 20, border: '1px solid rgba(249,168,212,0.20)', maxWidth: 860, justifyContent: 'center' }}>
            <div style={{ display: 'flex', color: 'rgba(255,255,255,0.88)', fontSize: 25, textAlign: 'center' as const, lineHeight: 1.55, flexWrap: 'wrap' as const, justifyContent: 'center' }}>
              {dados.mensagem}
            </div>
          </div>
        ) : null}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', color: 'rgba(249,168,212,0.38)', fontSize: 18, letterSpacing: 2 }}>
        prevenir.app.br
      </div>
    </div>
  )
}
