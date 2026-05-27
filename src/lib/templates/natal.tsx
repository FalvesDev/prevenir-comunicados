import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { formatarData, formatarPeriodo } from '@/lib/formatar-data'

interface Props {
  dados: DadosComunicado
  logoSrc: string
}

export function TemplateNatal({ dados, logoSrc }: Props) {
  const periodo = formatarPeriodo(dados.dataInicio, dados.dataFim)
  const retorno = formatarData(dados.dataRetorno)
  const ouro = '#f4c430'

  return (
    <div
      style={{
        width: 1080,
        height: 1080,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(155deg, #0a2e1a 0%, #1a4731 45%, #0d2416 100%)',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        overflow: 'hidden',
        padding: '64px 80px',
      }}
    >
      {/* Círculo decorativo dourado top-right */}
      <div style={{ position: 'absolute', top: -120, right: -120, width: 440, height: 440, borderRadius: '50%', background: 'rgba(244,196,48,0.07)', display: 'flex' }} />
      <div style={{ position: 'absolute', bottom: -100, left: -100, width: 380, height: 380, borderRadius: '50%', background: 'rgba(244,196,48,0.05)', display: 'flex' }} />

      {/* Estrelas decorativas */}
      <div style={{ position: 'absolute', top: 90, left: 90, width: 8, height: 8, borderRadius: '50%', background: ouro, display: 'flex', opacity: 0.7 }} />
      <div style={{ position: 'absolute', top: 200, left: 200, width: 5, height: 5, borderRadius: '50%', background: ouro, display: 'flex', opacity: 0.5 }} />
      <div style={{ position: 'absolute', top: 140, right: 200, width: 6, height: 6, borderRadius: '50%', background: ouro, display: 'flex', opacity: 0.6 }} />
      <div style={{ position: 'absolute', bottom: 300, right: 100, width: 7, height: 7, borderRadius: '50%', background: ouro, display: 'flex', opacity: 0.55 }} />
      <div style={{ position: 'absolute', bottom: 200, left: 160, width: 5, height: 5, borderRadius: '50%', background: ouro, display: 'flex', opacity: 0.45 }} />

      {/* Linha dourada top */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: ouro, display: 'flex' }} />
      {/* Linha dourada bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 5, background: ouro, display: 'flex' }} />

      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.92)', borderRadius: 20, padding: '14px 44px' }}>
          <img src={logoSrc} style={{ height: 58, objectFit: 'contain' }} alt="Prevenir" />
        </div>
      </div>

      {/* Conteúdo central */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center', paddingTop: 24, paddingBottom: 24 }}>
        {/* Ornamento dourado */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
          <div style={{ display: 'flex', width: 40, height: 2, background: ouro, opacity: 0.6 }} />
          <div style={{ display: 'flex', color: ouro, fontSize: 22, opacity: 0.8 }}>✦</div>
          <div style={{ display: 'flex', width: 40, height: 2, background: ouro, opacity: 0.6 }} />
        </div>

        <div style={{ display: 'flex', color: ouro, fontSize: 20, letterSpacing: 8, marginBottom: 16, textTransform: 'uppercase' as const }}>
          Comunicado de Recesso
        </div>

        <div style={{ display: 'flex', color: '#ffffff', fontSize: 86, fontWeight: 700, textAlign: 'center' as const, lineHeight: 1.05, marginBottom: 12, textTransform: 'uppercase' as const, maxWidth: 900, flexWrap: 'wrap' as const, justifyContent: 'center' }}>
          {dados.nomeFeriado || 'Natal'}
        </div>

        {/* Ornamento dourado inferior */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36 }}>
          <div style={{ display: 'flex', width: 40, height: 2, background: ouro, opacity: 0.6 }} />
          <div style={{ display: 'flex', color: ouro, fontSize: 22, opacity: 0.8 }}>✦</div>
          <div style={{ display: 'flex', width: 40, height: 2, background: ouro, opacity: 0.6 }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ display: 'flex', width: 7, height: 7, borderRadius: '50%', background: ouro, opacity: 0.7 }} />
            <div style={{ display: 'flex', color: 'rgba(255,255,255,0.78)', fontSize: 27 }}>
              Recesso: {periodo}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ display: 'flex', width: 7, height: 7, borderRadius: '50%', background: ouro }} />
            <div style={{ display: 'flex', color: '#ffffff', fontSize: 31, fontWeight: 600 }}>
              Retorno: {retorno}
            </div>
          </div>
        </div>

        {dados.mensagem ? (
          <div style={{ display: 'flex', marginTop: 48, padding: '24px 52px', background: 'rgba(244,196,48,0.08)', borderRadius: 20, border: '1px solid rgba(244,196,48,0.25)', maxWidth: 860, justifyContent: 'center' }}>
            <div style={{ display: 'flex', color: 'rgba(255,255,255,0.88)', fontSize: 25, textAlign: 'center' as const, lineHeight: 1.55, flexWrap: 'wrap' as const, justifyContent: 'center' }}>
              {dados.mensagem}
            </div>
          </div>
        ) : null}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', color: 'rgba(244,196,48,0.40)', fontSize: 18, letterSpacing: 2 }}>
        prevenir.app.br
      </div>
    </div>
  )
}
