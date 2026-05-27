import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // sharp é usado na API route para geração de imagem (server-side only)
  experimental: {
    serverComponentsExternalPackages: ['sharp', 'satori'],
  },
}

export default nextConfig
