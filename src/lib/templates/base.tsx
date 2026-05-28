import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { formatarDataNumero } from '@/lib/formatar-data'

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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
      {Array.from({ length: linhas }, (_, i) => (
        <div key={i} style={{ display: 'flex', gap: 11 }}>
          {Array.from({ length: colunas }, (_, j) => (
            <div key={j} style={{ width: 10, height: 10, borderRadius: '50%', background: cor, opacity: 0.72, display: 'flex' }} />
          ))}
        </div>
      ))}
    </div>
  )
}

function IconEmail({ cor }: { cor: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={cor}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function IconWhatsApp({ cor }: { cor: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={cor}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.837L0 24l6.313-1.485A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.88 9.88 0 01-5.03-1.372l-.361-.214-3.741.981 1.001-3.648-.235-.374A9.868 9.868 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106c5.42 0 9.894 4.474 9.894 9.894 0 5.42-4.474 9.894-9.894 9.894z" />
    </svg>
  )
}

function IconInstagram({ cor }: { cor: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={cor}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function getPeriodoRecesso(dados: DadosComunicado): string {
  if (dados.tipoData === 'especificos' && dados.diasEspecificos.length > 0) {
    const dias = dados.diasEspecificos.map(formatarDataNumero)
    if (dias.length === 1) return dias[0]
    return `${dias.slice(0, -1).join(', ')} e ${dias[dias.length - 1]}`
  }

  if (!dados.dataInicio) return ''

  const inicio = formatarDataNumero(dados.dataInicio)
  const fim = dados.dataFim && dados.dataFim !== dados.dataInicio ? formatarDataNumero(dados.dataFim) : ''
  return fim ? `${inicio} a ${fim}` : inicio
}

function getTituloSize(titulo: string): number {
  if (titulo.length > 26) return 44
  if (titulo.length > 18) return 50
  if (titulo.length > 12) return 58
  return 66
}

function getPeriodoSize(periodo: string): number {
  if (periodo.length > 24) return 34
  if (periodo.length > 16) return 40
  return 52
}

export function TemplateBase({ dados, logoSrc, cores, icone }: Props) {
  const titulo = dados.nomeFeriado.trim().toUpperCase()
  const periodo = getPeriodoRecesso(dados)
  const diasEspecificos = dados.tipoData === 'especificos'
    ? dados.diasEspecificos.slice(0, 5).map(formatarDataNumero)
    : []
  const retorno = dados.dataRetorno ? formatarDataNumero(dados.dataRetorno) : ''

  return (
    <div
      style={{
        width: 1080,
        height: 1080,
        display: 'flex',
        background: cores.fundo,
        fontFamily: 'Inter, sans-serif',
        overflow: 'hidden',
        position: 'relative',
        padding: '42px 46px',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, display: 'flex', background: 'linear-gradient(112deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 34%, rgba(0,0,0,0.18) 100%)' }} />
      <div style={{ position: 'absolute', top: -180, right: -160, width: 610, height: 610, borderRadius: '50%', background: 'rgba(255,255,255,0.11)', display: 'flex' }} />
      <div style={{ position: 'absolute', top: 135, right: -34, width: 410, height: 410, borderRadius: '50%', background: 'rgba(255,255,255,0.055)', display: 'flex' }} />
      <div style={{ position: 'absolute', bottom: -180, left: -120, width: 440, height: 440, borderRadius: '50%', background: 'rgba(0,0,0,0.13)', display: 'flex' }} />

      <div
        style={{
          position: 'absolute',
          right: -92,
          top: 452,
          display: 'flex',
          width: 860,
          height: 150,
          color: 'white',
          fontSize: 148,
          lineHeight: 1,
          fontWeight: 800,
          letterSpacing: 6,
          opacity: 0.10,
          transform: 'rotate(-90deg)',
          transformOrigin: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        PREVENIR
      </div>

      <div style={{ position: 'absolute', top: 20, left: 132, display: 'flex' }}>
        <Dots cor={cores.dot} linhas={3} colunas={12} />
      </div>
      <div style={{ position: 'absolute', bottom: 18, left: 132, display: 'flex' }}>
        <Dots cor={cores.dot} linhas={3} colunas={12} />
      </div>

      <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', gap: 0 }}>
        <div style={{ display: 'flex', width: 608, flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: cores.card,
              borderRadius: 26,
              overflow: 'hidden',
              boxShadow: '0 34px 68px rgba(0,0,0,0.30)',
              border: '1px solid rgba(255,255,255,0.28)',
            }}
          >
            <div style={{ display: 'flex', width: '100%', height: 8, background: cores.dot }} />

            <div style={{ display: 'flex', flexDirection: 'column', padding: '32px 42px 36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 26 }}>
                <img
                  src={logoSrc}
                  width={210}
                  height={58}
                  style={{ objectFit: 'contain', objectPosition: 'left center' }}
                />
                <div style={{ display: 'flex', padding: '10px 16px', borderRadius: 999, background: 'rgba(255,255,255,0.38)', color: cores.texto, fontSize: 12, fontWeight: 800, letterSpacing: 3, textTransform: 'uppercase' as const }}>
                  Recesso
                </div>
              </div>

              <div style={{ display: 'flex', width: '100%', height: 1, background: cores.texto, opacity: 0.14, marginBottom: 26 }} />

              <div style={{ display: 'flex', color: cores.texto, fontSize: 13, fontWeight: 800, letterSpacing: 5, textTransform: 'uppercase' as const, opacity: 0.62, marginBottom: 10 }}>
                Comunicado -
              </div>
              <div style={{ display: 'flex', color: cores.texto, fontSize: getTituloSize(titulo), fontWeight: 800, lineHeight: 1.01, letterSpacing: 0, textTransform: 'uppercase' as const, marginBottom: 26 }}>
                {titulo}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', color: cores.texto, fontSize: 27, lineHeight: 1.31, fontWeight: 500 }}>
                  Informamos que a Prevenir Exames estará em recesso
                </div>

                {diasEspecificos.length > 2 ? (
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap' as const,
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 10,
                      padding: '18px 18px',
                      borderRadius: 18,
                      background: 'rgba(255,255,255,0.42)',
                      border: '1px solid rgba(255,255,255,0.35)',
                    }}
                  >
                    {diasEspecificos.map((dia) => (
                      <div
                        key={dia}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minWidth: 92,
                          padding: '13px 16px',
                          borderRadius: 14,
                          background: 'rgba(255,255,255,0.46)',
                          border: '1px solid rgba(255,255,255,0.42)',
                          color: cores.texto,
                          fontSize: 30,
                          lineHeight: 1,
                          fontWeight: 800,
                        }}
                      >
                        {dia}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '18px 22px',
                      borderRadius: 18,
                      background: 'rgba(255,255,255,0.42)',
                      border: '1px solid rgba(255,255,255,0.35)',
                      color: cores.texto,
                      fontSize: getPeriodoSize(periodo),
                      lineHeight: 1,
                      fontWeight: 800,
                    }}
                  >
                    {periodo}
                  </div>
                )}

                <div style={{ display: 'flex', color: cores.texto, fontSize: 27, lineHeight: 1.31, fontWeight: 500 }}>
                  devido ao feriado. O atendimento retorna normalmente em:
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
                  <div style={{ display: 'flex', width: 58, height: 58, borderRadius: 17, background: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.42)', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="29" height="29" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12.5L9.2 16.7L19.5 6.4" stroke={cores.texto} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', color: cores.texto, fontSize: 11, fontWeight: 800, letterSpacing: 4, textTransform: 'uppercase' as const, opacity: 0.54, marginBottom: 4 }}>
                      Retorno
                    </div>
                    <div style={{ display: 'flex', color: cores.texto, fontSize: 38, lineHeight: 1, fontWeight: 800 }}>
                      {retorno}
                    </div>
                  </div>
                </div>

                {dados.mensagem ? (
                  <div style={{ display: 'flex', color: cores.texto, fontSize: 24, lineHeight: 1.35, fontWeight: 700, opacity: 0.72, marginTop: 2 }}>
                    {dados.mensagem}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              background: cores.card,
              borderRadius: 22,
              padding: '20px 30px',
              alignItems: 'center',
              gap: 26,
              boxShadow: '0 24px 48px rgba(0,0,0,0.24)',
              border: '1px solid rgba(255,255,255,0.25)',
            }}
          >
            <div style={{ display: 'flex', color: cores.texto, fontSize: 13, fontWeight: 800, letterSpacing: 5, textTransform: 'uppercase' as const, opacity: 0.56 }}>
              Contatos
            </div>

            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 11 }}>
              {dados.email ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <div style={{ display: 'flex', width: 34, height: 34, borderRadius: 10, background: 'rgba(255,255,255,0.38)', border: '1px solid rgba(255,255,255,0.34)', alignItems: 'center', justifyContent: 'center' }}>
                    <IconEmail cor={cores.texto} />
                  </div>
                  <div style={{ display: 'flex', color: cores.texto, fontSize: 21, fontWeight: 800 }}>{dados.email}</div>
                </div>
              ) : null}
              {dados.telefone ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <div style={{ display: 'flex', width: 34, height: 34, borderRadius: 10, background: 'rgba(255,255,255,0.38)', border: '1px solid rgba(255,255,255,0.34)', alignItems: 'center', justifyContent: 'center' }}>
                    <IconWhatsApp cor={cores.texto} />
                  </div>
                  <div style={{ display: 'flex', color: cores.texto, fontSize: 21, fontWeight: 800 }}>{dados.telefone}</div>
                </div>
              ) : null}
              {dados.instagram ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <div style={{ display: 'flex', width: 34, height: 34, borderRadius: 10, background: 'rgba(255,255,255,0.38)', border: '1px solid rgba(255,255,255,0.34)', alignItems: 'center', justifyContent: 'center' }}>
                    <IconInstagram cor={cores.texto} />
                  </div>
                  <div style={{ display: 'flex', color: cores.texto, fontSize: 21, fontWeight: 800 }}>{dados.instagram}</div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flex: 1, marginLeft: -8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', width: 420, height: 420, borderRadius: '50%', background: cores.marca, display: 'flex' }} />
          <div style={{ position: 'absolute', width: 330, height: 330, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.20)', display: 'flex' }} />
          <div style={{ position: 'absolute', top: 176, right: 12, width: 90, height: 90, borderRadius: '50%', background: cores.dot, opacity: 0.72, display: 'flex' }} />
          <div style={{ position: 'absolute', bottom: 220, left: 24, width: 50, height: 50, borderRadius: '50%', background: 'rgba(255,255,255,0.42)', display: 'flex' }} />
          <div style={{ position: 'absolute', bottom: 225, width: 315, height: 50, borderRadius: '50%', background: 'rgba(0,25,76,0.30)', display: 'flex' }} />
          <div style={{ display: 'flex' }}>
            {icone}
          </div>
        </div>
      </div>
    </div>
  )
}
