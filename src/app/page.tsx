'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Download, ImageIcon, Loader2 } from 'lucide-react'
import { DadosComunicado, DADOS_INICIAIS, TipoTemplate } from '@/types/comunicado'
import { FormularioComunicado } from '@/components/FormularioComunicado'
import { SeletorTemplate } from '@/components/SeletorTemplate'
import { PreviewArte } from '@/components/PreviewArte'

export default function Home() {
  const [dados, setDados] = useState<DadosComunicado>(DADOS_INICIAIS)
  const [gerando, setGerando] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const [sucesso, setSucesso] = useState(false)

  function atualizar(campo: keyof DadosComunicado, valor: string) {
    setDados((prev) => {
      if (campo === 'tipoComunicado') {
        if (prev.tipoComunicado === valor) return prev
        return {
          ...prev,
          tipoComunicado: valor as DadosComunicado['tipoComunicado'],
          template: valor === 'norma' ? 'normaMedico' : 'generico',
          nomeFeriado: '',
          mensagem: '',
          prazoNorma: '',
          rotuloPrazoNorma: '',
          textoApoioPrazo: '',
          descricaoNorma: '',
          consequenciaNorma: '',
          checklistItem1: '',
          checklistItem2: '',
          checklistItem3: '',
          tipoData: 'periodo',
          dataInicio: '',
          dataFim: '',
          diasEspecificos: [],
          dataRetorno: '',
        }
      }
      return { ...prev, [campo]: valor }
    })
    setErro(null)
    setSucesso(false)
  }

  function atualizarDias(dias: string[]) {
    setDados((prev) => ({ ...prev, diasEspecificos: dias.slice(0, 5) }))
    setErro(null)
    setSucesso(false)
  }

  function alterarTemplate(template: TipoTemplate) {
    setDados((prev) => ({ ...prev, template }))
    setSucesso(false)
  }

  async function baixarArte() {
    if (!dados.nomeFeriado.trim()) {
      setErro(dados.tipoComunicado === 'norma' ? 'Informe o título da norma.' : 'Informe o nome do feriado.')
      return
    }
    if (dados.tipoComunicado === 'norma') {
      if (!dados.prazoNorma.trim()) {
        setErro('Informe o prazo em destaque.')
        return
      }
      if (dados.template === 'normaChecklist' && ![dados.checklistItem1, dados.checklistItem2, dados.checklistItem3].some((item) => item.trim())) {
        setErro('Informe pelo menos um item do checklist.')
        return
      }
    } else {
      if (dados.tipoData === 'especificos') {
        if (dados.diasEspecificos.length === 0) {
          setErro('Adicione pelo menos um dia específico de recesso.')
          return
        }
        if (dados.diasEspecificos.length > 5) {
          setErro('Adicione no máximo 5 dias específicos de recesso.')
          return
        }
      } else {
        if (!dados.dataInicio) {
          setErro('Informe a data de início do recesso.')
          return
        }
      }
      if (!dados.dataRetorno) {
        setErro('Informe a data de retorno.')
        return
      }
    }

    setGerando(true)
    setErro(null)
    setSucesso(false)

    try {
      const response = await fetch('/api/gerar-arte', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...dados,
          dataFim: dados.dataFim || dados.dataInicio,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.erro || 'Erro ao gerar arte')
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      const prefixo = dados.tipoComunicado === 'norma' ? 'norma' : 'recesso'
      a.download = `${prefixo}-${dados.nomeFeriado.toLowerCase().replace(/\s+/g, '-')}.jpg`
      a.click()
      URL.revokeObjectURL(url)
      setSucesso(true)
    } catch (err) {
      setErro(err instanceof Error ? err.message : 'Erro desconhecido')
    } finally {
      setGerando(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <Image
            src="/logoPrevenirCompleta.png"
            alt="Prevenir Exames"
            width={140}
            height={40}
            className="h-9 w-auto object-contain"
          />
          <div className="w-px h-8 bg-slate-200" />
          <div>
            <h1 className="text-base font-bold text-slate-900 leading-tight">Gerador de Comunicados</h1>
            <p className="text-xs text-slate-500">Artes profissionais para redes sociais</p>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">

          {/* Painel esquerdo: formulário */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-prevenir-50 flex items-center justify-center">
                  <ImageIcon className="w-4 h-4 text-prevenir-600" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Dados do comunicado</h2>
                  <p className="text-xs text-slate-500">
                    {dados.tipoComunicado === 'norma' ? 'Crie alertas de normas, prazos e multas' : 'Preencha as informações do recesso'}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-6">
              <FormularioComunicado dados={dados} onChange={atualizar} onChangeDias={atualizarDias} />
              <SeletorTemplate tipoComunicado={dados.tipoComunicado} valor={dados.template} onChange={alterarTemplate} />

              {/* Feedback */}
              {erro && (
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" />
                  </svg>
                  {erro}
                </div>
              )}
              {sucesso && (
                <div className="flex items-center gap-3 p-4 bg-prevenir-50 border border-prevenir-200 rounded-xl text-sm text-prevenir-700">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Arte gerada e baixada com sucesso!
                </div>
              )}

              {/* Botão principal */}
              <button
                onClick={baixarArte}
                disabled={gerando}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-prevenir-500 hover:bg-prevenir-600 disabled:bg-prevenir-300 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
              >
                {gerando ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Gerando arte...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Baixar Arte JPG (1080×1080)
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Painel direito: preview */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col items-center">
            <PreviewArte dados={dados} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-200 mt-8">
        Prevenir Exames — Desenvolvido por{' '}
        <a href="https://github.com/falvesdev" target="_blank" rel="noopener noreferrer" className="text-prevenir-500 hover:underline">
          falvesdev
        </a>{' '}
        © {new Date().getFullYear()}
      </footer>
    </div>
  )
}
