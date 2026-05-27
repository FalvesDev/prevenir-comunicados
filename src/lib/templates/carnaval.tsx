import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { formatarData, formatarPeriodo } from '@/lib/formatar-data'

interface Props {
  dados: DadosComunicado
  logoSrc: string
}

export function TemplateCarnaval({ dados, logoSrc }: Props) {
  const periodo = formatarPeriodo(dados.dataInicio, dados.dataFim)
  const retorno = formatarData(dados.dataRetorno)
  const magenta = '#e879f9'

  return (
    <div
      style={{
        width: 1080,
        height: 1080,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(155deg, #1a0533 0%, #3d0d6b 40%, #701a97 100%)',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        overflow: 'hidden',
        padding: '64px 80px',
      }}
    >
      {/* Confetes decorativos — círculos coloridos espalhados */}
      <div style={{ position: 'absolute', top: 80, left: 80, width: 28, height: 28, borderRadius: '50%', background: '#f59e0b', display: 'flex', opacity: 0.85 }} />
      <div style={{ position: 'absolute', top: 160, left: 180, width: 18, height: 18, borderRadius: '50%', background: '#22d3ee', display: 'flex', opacity: 0.75 }} />
      <div style={{ position: 'absolute', top: 110, left: 280, width: 14, height: 14, borderRadius: '50%', background: '#f43f5e', display: 'flex', opacity: 0.7 }} />
      <div style={{ position: 'absolute', top: 60, right: 180, width: 22, height: 22, borderRadius: '50%', background: '#84cc16', display: 'flex', opacity: 0.8 }} />
      <div style={{ position: 'absolute', top: 130, right: 90, width: 16, height: 16, borderRadius: '50%', background: '#f59e0b', display: 'flex', opacity: 0.7 }} />
      <div style={{ position: 'absolute', top: 220, right: 200, width: 12, height: 12, borderRadius: '50%', background: '#e879f9', display: 'flex', opacity: 0.65 }} />

      <div style={{ position: 'absolute', bottom: 140, left: 70, width: 24, height: 24, borderRadius: '50%', background: '#22d3ee', display: 'flex', opacity: 0.8 }} />
      <div style={{ position: 'absolute', bottom: 200, left: 160, width: 16, height: 16, borderRadius: '50%', background: '#f43f5e', display: 'flex', opacity: 0.7 }} />
      <div style={{ position: 'absolute', bottom: 100, right: 80, width: 20, height: 20, borderRadius: '50%', background: '#f59e0b', display: 'flex', opacity: 0.75 }} />
      <div style={{ position: 'absolute', bottom: 180, right: 180, width: 14, height: 14, borderRadius: '50%', background: '#84cc16', display: 'flex', opacity: 0.65 }} />

      {/* Círculo decorativo grande */}
      <div style={{ position: 'absolute', top: -160, right: -160, width: 500, height: 500, borderRadius: '50%', background: 'rgba(232,121,249,0.08)', display: 'flex' }} />
      <div style={{ position: 'absolute', bottom: -120, left: -120, width: 420, height: 420, borderRadius: '50%', background: 'rgba(232,121,249,0.06)', display: 'flex' }} />

      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.93)', borderRadius: 20, padding: '14px 44px' }}>
          <img src={logoSrc} style={{ height: 58, objectFit: 'contain' }} alt="Prevenir" />
        </div>
      </div>

      {/* Conteúdo central */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center', paddingTop: 24, paddingBottom: 24 }}>
        <div style={{ display: 'flex', color: magenta, fontSize: 21, letterSpacing: 6, marginBottom: 22, textTransform: 'uppercase' as const, opacity: 0.9 }}>
          Comunicado de Recesso
        </div>

        <div style={{ display: 'flex', color: '#ffffff', fontSize: 86, fontWeight: 700, textAlign: 'center' as const, lineHeight: 1.05, marginBottom: 40, textTransform: 'uppercase' as const, maxWidth: 900, flexWrap: 'wrap' as const, justifyContent: 'center' }}>
          {dados.nomeFeriado || 'Carnaval'}
        </div>

        {/* Linha divisória colorida */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 40 }}>
          <div style={{ display: 'flex', width: 32, height: 4, borderRadius: 2, background: '#f59e0b' }} />
          <div style={{ display: 'flex', width: 32, height: 4, borderRadius: 2, background: '#f43f5e' }} />
          <div style={{ display: 'flex', width: 32, height: 4, borderRadius: 2, background: magenta }} />
          <div style={{ display: 'flex', width: 32, height: 4, borderRadius: 2, background: '#22d3ee' }} />
          <div style={{ display: 'flex', width: 32, height: 4, borderRadius: 2, background: '#84cc16' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ display: 'flex', width: 8, height: 8, borderRadius: '50%', background: magenta, opacity: 0.8 }} />
            <div style={{ display: 'flex', color: 'rgba(255,255,255,0.78)', fontSize: 27 }}>
              Recesso: {periodo}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ display: 'flex', width: 8, height: 8, borderRadius: '50%', background: magenta }} />
            <div style={{ display: 'flex', color: '#ffffff', fontSize: 31, fontWeight: 600 }}>
              Retorno: {retorno}
            </div>
          </div>
        </div>

        {dados.mensagem ? (
          <div style={{ display: 'flex', marginTop: 48, padding: '24px 52px', background: 'rgba(232,121,249,0.10)', borderRadius: 20, border: '1px solid rgba(232,121,249,0.22)', maxWidth: 860, justifyContent: 'center' }}>
            <div style={{ display: 'flex', color: 'rgba(255,255,255,0.88)', fontSize: 25, textAlign: 'center' as const, lineHeight: 1.55, flexWrap: 'wrap' as const, justifyContent: 'center' }}>
              {dados.mensagem}
            </div>
          </div>
        ) : null}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', color: 'rgba(232,121,249,0.38)', fontSize: 18, letterSpacing: 2 }}>
        prevenir.app.br
      </div>
    </div>
  )
}
