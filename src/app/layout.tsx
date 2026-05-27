import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prevenir Comunicados — Gerador de Artes',
  description: 'Gere artes profissionais para comunicados de recesso e feriados da Prevenir Exames',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  )
}
