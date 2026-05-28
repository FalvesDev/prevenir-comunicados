import React from 'react'
import { DadosComunicado } from '@/types/comunicado'

interface Props {
  dados: DadosComunicado
  logoSrc: string
  medicoSrc: string
  variant?: 'medico' | 'prazo' | 'checklist'
}

function IconEmail({ cor }: { cor: string }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill={cor}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function IconWhatsApp({ cor }: { cor: string }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill={cor}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.837L0 24l6.313-1.485A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.88 9.88 0 01-5.03-1.372l-.361-.214-3.741.981 1.001-3.648-.235-.374A9.868 9.868 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106c5.42 0 9.894 4.474 9.894 9.894 0 5.42-4.474 9.894-9.894 9.894z" />
    </svg>
  )
}

function IconInstagram({ cor }: { cor: string }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill={cor}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

export function TemplateNorma({ dados, logoSrc, medicoSrc, variant = 'medico' }: Props) {
  const titulo = dados.nomeFeriado.trim().toUpperCase()
  const prazo = dados.prazoNorma.trim()
  const rotuloPrazo = dados.rotuloPrazoNorma.trim() || 'Prazo'
  const textoApoioPrazo = dados.textoApoioPrazo.trim() || 'antes do início das fiscalizações punitivas.'
  const descricao = dados.descricaoNorma.trim()
  const consequencia = dados.consequenciaNorma.trim()
  const chamada = dados.mensagem.trim()
  const itensChecklist = [dados.checklistItem1, dados.checklistItem2, dados.checklistItem3]
    .map((item) => item.trim())
    .filter(Boolean)

  if (variant === 'prazo') {
    return (
      <div
        style={{
          width: 1080,
          height: 1080,
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          padding: 48,
          background: 'linear-gradient(145deg, #073b8f 0%, #0D47A1 48%, #041a47 100%)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ position: 'absolute', top: -160, right: -130, width: 620, height: 620, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: -140, left: -120, width: 430, height: 430, borderRadius: '50%', background: 'rgba(255,193,7,0.14)', display: 'flex' }} />
        <div style={{ position: 'absolute', right: -84, bottom: -2, display: 'flex', opacity: 0.96 }}>
          <img src={medicoSrc} width={430} height={540} style={{ objectFit: 'contain' }} />
        </div>

        <div style={{ display: 'flex', position: 'relative', flexDirection: 'column', width: 705 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 34 }}>
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.92)', borderRadius: 18, padding: '12px 18px' }}>
              <img src={logoSrc} width={224} height={62} style={{ objectFit: 'contain', objectPosition: 'left center' }} />
            </div>
            <div style={{ display: 'flex', background: '#FFC107', color: '#0D47A1', borderRadius: 999, padding: '12px 18px', fontSize: 13, fontWeight: 800, letterSpacing: 3, textTransform: 'uppercase' as const }}>
              Alerta
            </div>
          </div>

          <div style={{ display: 'flex', color: '#FFC107', fontSize: 15, fontWeight: 800, letterSpacing: 5, textTransform: 'uppercase' as const, marginBottom: 14 }}>
            Prazo de adequação
          </div>
          <div style={{ display: 'flex', color: 'white', fontSize: titulo.length > 18 ? 56 : 68, lineHeight: 1, fontWeight: 800, marginBottom: 26 }}>
            {titulo}
          </div>

          <div style={{ display: 'flex', background: 'linear-gradient(155deg, #FFD54F 0%, #FFC107 58%, #FFB300 100%)', borderRadius: 30, padding: '30px 36px', boxShadow: '0 34px 72px rgba(0,0,0,0.32)', marginBottom: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', color: '#0D47A1', opacity: 0.62, fontSize: 14, fontWeight: 800, letterSpacing: 5, textTransform: 'uppercase' as const, marginBottom: 8 }}>
                {rotuloPrazo}
              </div>
              <div style={{ display: 'flex', color: '#0D47A1', fontSize: prazo.length > 10 ? 66 : 92, lineHeight: 0.95, fontWeight: 800 }}>
                {prazo.toUpperCase()}
              </div>
              <div style={{ display: 'flex', color: '#0D47A1', fontSize: 27, lineHeight: 1.22, fontWeight: 800, marginTop: 12, maxWidth: 560 }}>
                {textoApoioPrazo}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', color: 'white', fontSize: 30, lineHeight: 1.25, fontWeight: 700, marginBottom: 22 }}>
            {descricao}
          </div>

          <div style={{ display: 'flex', background: 'rgba(255,255,255,0.13)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 24, padding: '22px 26px', color: 'white', fontSize: 27, lineHeight: 1.24, fontWeight: 800, marginBottom: 22 }}>
            {consequencia}
          </div>

          <div style={{ display: 'flex', color: '#FFD54F', fontSize: 27, lineHeight: 1.28, fontWeight: 800, marginBottom: 28 }}>
            {chamada}
          </div>

          <div style={{ display: 'flex', background: 'rgba(255,255,255,0.96)', borderRadius: 22, padding: '18px 24px', gap: 20, alignItems: 'center' }}>
            <div style={{ display: 'flex', color: '#0D47A1', fontSize: 12, fontWeight: 800, letterSpacing: 4, textTransform: 'uppercase' as const, opacity: 0.55 }}>Contatos</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', color: '#0D47A1', fontSize: 20, fontWeight: 800 }}>{dados.email}</div>
              <div style={{ display: 'flex', color: '#0D47A1', fontSize: 20, fontWeight: 800 }}>{dados.telefone}  |  {dados.instagram}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'checklist') {
    return (
      <div
        style={{
          width: 1080,
          height: 1080,
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          padding: 48,
          background: 'linear-gradient(145deg, #f8fbff 0%, #e3f2fd 58%, #cfe8ff 100%)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ position: 'absolute', top: -140, right: -120, width: 560, height: 560, borderRadius: '50%', background: 'rgba(21,101,192,0.12)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: -130, left: -110, width: 420, height: 420, borderRadius: '50%', background: 'rgba(255,193,7,0.24)', display: 'flex' }} />

        <div style={{ display: 'flex', flexDirection: 'column', width: 1000, position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 34 }}>
            <img src={logoSrc} width={224} height={62} style={{ objectFit: 'contain', objectPosition: 'left center' }} />
            <div style={{ display: 'flex', color: '#0D47A1', background: '#FFC107', borderRadius: 999, padding: '12px 18px', fontSize: 13, fontWeight: 800, letterSpacing: 3, textTransform: 'uppercase' as const }}>
              Compliance
            </div>
          </div>

          <div style={{ display: 'flex', gap: 34 }}>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', color: '#1565C0', fontSize: 15, fontWeight: 800, letterSpacing: 5, textTransform: 'uppercase' as const, marginBottom: 12 }}>
                Checklist de adequação
              </div>
              <div style={{ display: 'flex', color: '#0D47A1', fontSize: titulo.length > 18 ? 54 : 66, lineHeight: 1, fontWeight: 800, marginBottom: 24 }}>
                {titulo}
              </div>
              <div style={{ display: 'flex', color: '#0D47A1', fontSize: 28, lineHeight: 1.3, fontWeight: 600, marginBottom: 26 }}>
                {descricao}
              </div>

              {itensChecklist.map((item, index) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 16, background: 'white', borderRadius: 22, padding: '18px 22px', marginBottom: 14, boxShadow: '0 18px 36px rgba(13,71,161,0.10)' }}>
                  <div style={{ display: 'flex', width: 46, height: 46, borderRadius: 14, background: '#FFC107', color: '#0D47A1', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 800 }}>
                    {index + 1}
                  </div>
                  <div style={{ display: 'flex', color: '#0D47A1', fontSize: 25, fontWeight: 800 }}>
                    {item}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', width: 346, flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', flexDirection: 'column', background: '#0D47A1', borderRadius: 28, padding: '28px 26px', color: 'white', boxShadow: '0 28px 58px rgba(13,71,161,0.26)' }}>
                <div style={{ display: 'flex', color: '#FFC107', fontSize: 13, fontWeight: 800, letterSpacing: 4, textTransform: 'uppercase' as const, marginBottom: 8 }}>
                  Prazo
                </div>
                <div style={{ display: 'flex', fontSize: prazo.length > 10 ? 48 : 66, lineHeight: 1, fontWeight: 800, marginBottom: 18 }}>
                  {prazo.toUpperCase()}
                </div>
                <div style={{ display: 'flex', fontSize: 23, lineHeight: 1.25, fontWeight: 700 }}>
                  {consequencia}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', background: '#FFC107', borderRadius: 24, padding: '24px 24px', color: '#0D47A1' }}>
                <div style={{ display: 'flex', fontSize: 23, lineHeight: 1.24, fontWeight: 800, marginBottom: 18 }}>
                  {chamada}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 16, fontWeight: 800 }}>
                  <div style={{ display: 'flex' }}>{dados.email}</div>
                  <div style={{ display: 'flex' }}>{dados.telefone}</div>
                  <div style={{ display: 'flex' }}>{dados.instagram}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        width: 1080,
        height: 1080,
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        padding: 46,
        background: 'linear-gradient(145deg, #1565C0 0%, #0D47A1 58%, #06255f 100%)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, display: 'flex', background: 'linear-gradient(112deg, rgba(255,255,255,0.14), rgba(255,255,255,0) 35%, rgba(0,0,0,0.20))' }} />
      <div style={{ position: 'absolute', top: -110, right: -170, width: 590, height: 590, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display: 'flex' }} />
      <div style={{ position: 'absolute', bottom: -140, right: 40, width: 430, height: 430, borderRadius: '50%', background: 'rgba(255,193,7,0.14)', display: 'flex' }} />
      <div style={{ position: 'absolute', bottom: 18, right: 38, width: 380, height: 58, borderRadius: '50%', background: 'rgba(0,20,70,0.32)', display: 'flex' }} />
      <div style={{ position: 'absolute', right: -28, bottom: -6, display: 'flex' }}>
        <img src={medicoSrc} width={540} height={654} style={{ objectFit: 'contain' }} />
      </div>

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', width: 650, gap: 22 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(155deg, #FFD54F 0%, #FFC107 58%, #FFB300 100%)',
            borderRadius: 28,
            padding: '34px 42px 38px',
            boxShadow: '0 34px 68px rgba(0,0,0,0.30)',
            border: '1px solid rgba(255,255,255,0.30)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
            <img src={logoSrc} width={212} height={58} style={{ objectFit: 'contain', objectPosition: 'left center' }} />
            <div style={{ display: 'flex', color: '#0D47A1', background: 'rgba(255,255,255,0.40)', borderRadius: 999, padding: '11px 16px', fontSize: 12, fontWeight: 800, letterSpacing: 3, textTransform: 'uppercase' as const }}>
              Norma
            </div>
          </div>

          <div style={{ display: 'flex', height: 1, background: '#0D47A1', opacity: 0.14, marginBottom: 28 }} />
          <div style={{ display: 'flex', color: '#0D47A1', opacity: 0.62, fontSize: 13, fontWeight: 800, letterSpacing: 5, textTransform: 'uppercase' as const, marginBottom: 10 }}>
            Alerta normativo
          </div>
          <div style={{ display: 'flex', color: '#0D47A1', fontSize: titulo.length > 18 ? 52 : 64, lineHeight: 1, fontWeight: 800, marginBottom: 22 }}>
            {titulo}
          </div>

          <div style={{ display: 'flex', color: '#0D47A1', fontSize: 25, lineHeight: 1.25, fontWeight: 600, marginBottom: 22 }}>
            {descricao}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 22 }}>
            <div style={{ display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.42)', borderRadius: 22, padding: '18px 24px', minWidth: 238 }}>
              <div style={{ display: 'flex', color: '#0D47A1', opacity: 0.58, fontSize: 12, fontWeight: 800, letterSpacing: 4, textTransform: 'uppercase' as const, marginBottom: 6 }}>
                Prazo
              </div>
              <div style={{ display: 'flex', color: '#0D47A1', fontSize: prazo.length > 10 ? 42 : 58, lineHeight: 1, fontWeight: 800 }}>
                {prazo.toUpperCase()}
              </div>
            </div>
            <div style={{ display: 'flex', color: '#0D47A1', fontSize: 23, lineHeight: 1.24, fontWeight: 800, flex: 1 }}>
              {textoApoioPrazo}
            </div>
          </div>

          <div style={{ display: 'flex', background: 'rgba(13,71,161,0.10)', borderRadius: 18, padding: '18px 20px', color: '#0D47A1', fontSize: 23, lineHeight: 1.25, fontWeight: 800, marginBottom: 18 }}>
            {consequencia}
          </div>

          <div style={{ display: 'flex', color: '#0D47A1', fontSize: 22, lineHeight: 1.3, fontWeight: 700, opacity: 0.78 }}>
            {chamada}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            background: 'linear-gradient(155deg, #FFD54F 0%, #FFC107 58%, #FFB300 100%)',
            borderRadius: 22,
            padding: '20px 30px',
            boxShadow: '0 24px 48px rgba(0,0,0,0.24)',
            border: '1px solid rgba(255,255,255,0.25)',
          }}
        >
          <div style={{ display: 'flex', color: '#0D47A1', fontSize: 13, fontWeight: 800, letterSpacing: 5, textTransform: 'uppercase' as const, opacity: 0.56 }}>
            Contatos
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {dados.email ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <div style={{ display: 'flex', width: 34, height: 34, borderRadius: 10, background: 'rgba(255,255,255,0.38)', alignItems: 'center', justifyContent: 'center' }}>
                  <IconEmail cor="#0D47A1" />
                </div>
                <div style={{ display: 'flex', color: '#0D47A1', fontSize: 21, fontWeight: 800 }}>{dados.email}</div>
              </div>
            ) : null}
            {dados.telefone ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <div style={{ display: 'flex', width: 34, height: 34, borderRadius: 10, background: 'rgba(255,255,255,0.38)', alignItems: 'center', justifyContent: 'center' }}>
                  <IconWhatsApp cor="#0D47A1" />
                </div>
                <div style={{ display: 'flex', color: '#0D47A1', fontSize: 21, fontWeight: 800 }}>{dados.telefone}</div>
              </div>
            ) : null}
            {dados.instagram ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <div style={{ display: 'flex', width: 34, height: 34, borderRadius: 10, background: 'rgba(255,255,255,0.38)', alignItems: 'center', justifyContent: 'center' }}>
                  <IconInstagram cor="#0D47A1" />
                </div>
                <div style={{ display: 'flex', color: '#0D47A1', fontSize: 21, fontWeight: 800 }}>{dados.instagram}</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export function TemplateNormaPrazo(props: Omit<Props, 'variant'>) {
  return <TemplateNorma {...props} variant="prazo" />
}

export function TemplateNormaChecklist(props: Omit<Props, 'variant'>) {
  return <TemplateNorma {...props} variant="checklist" />
}
