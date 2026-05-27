import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { formatarData, formatarPeriodo } from '@/lib/formatar-data'

interface Props {
  dados: DadosComunicado
  logoSrc: string
}

export function TemplateGenerico({ dados, logoSrc }: Props) {
  const periodo = formatarPeriodo(dados.dataInicio, dados.dataFim)
  const retorno = formatarData(dados.dataRetorno)

  return (
    <div
      style={{
        width: 1080,
        height: 1080,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(155deg, #007a6e 0%, #009688 35%, #004d40 100%)',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        overflow: 'hidden',
        padding: '64px 80px',
      }}
    >
      {/* Círculos decorativos de fundo */}
      <div style={{ position: 'absolute', top: -140, right: -140, width: 480, height: 480, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex' }} />
      <div style={{ position: 'absolute', bottom: -110, left: -110, width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex' }} />
      <div style={{ position: 'absolute', top: 420, right: 20, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', display: 'flex' }} />

      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.95)', borderRadius: 20, padding: '16px 44px' }}>
          <img src={logoSrc} style={{ height: 62, objectFit: 'contain' }} alt="Prevenir" />
        </div>
      </div>

      {/* Conteúdo central */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center', paddingTop: 32, paddingBottom: 32 }}>
        <div style={{ display: 'flex', color: 'rgba(255,255,255,0.60)', fontSize: 22, letterSpacing: 6, marginBottom: 28, textTransform: 'uppercase' as const }}>
          Comunicado de Recesso
        </div>

        <div style={{ display: 'flex', color: '#ffffff', fontSize: 88, fontWeight: 700, textAlign: 'center' as const, lineHeight: 1.05, marginBottom: 44, textTransform: 'uppercase' as const, maxWidth: 900, flexWrap: 'wrap' as const, justifyContent: 'center' }}>
          {dados.nomeFeriado || 'Feriado'}
        </div>

        <div style={{ display: 'flex', width: 90, height: 3, background: 'rgba(255,255,255,0.35)', marginBottom: 44 }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ display: 'flex', width: 9, height: 9, borderRadius: '50%', background: 'rgba(255,255,255,0.55)' }} />
            <div style={{ display: 'flex', color: 'rgba(255,255,255,0.80)', fontSize: 28 }}>
              Recesso: {periodo}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ display: 'flex', width: 9, height: 9, borderRadius: '50%', background: '#ffffff' }} />
            <div style={{ display: 'flex', color: '#ffffff', fontSize: 32, fontWeight: 600 }}>
              Retorno: {retorno}
            </div>
          </div>
        </div>

        {dados.mensagem ? (
          <div style={{ display: 'flex', marginTop: 52, padding: '26px 52px', background: 'rgba(255,255,255,0.10)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.15)', maxWidth: 860, justifyContent: 'center' }}>
            <div style={{ display: 'flex', color: '#ffffff', fontSize: 26, textAlign: 'center' as const, lineHeight: 1.55, flexWrap: 'wrap' as const, justifyContent: 'center' }}>
              {dados.mensagem}
            </div>
          </div>
        ) : null}
      </div>

      {/* Rodapé */}
      <div style={{ display: 'flex', alignItems: 'center', color: 'rgba(255,255,255,0.38)', fontSize: 19, letterSpacing: 2 }}>
        prevenir.app.br
      </div>
    </div>
  )
}
