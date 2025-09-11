import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* otras opciones de configuración si tienes */
  eslint: {
    // Ignora ESLint durante el build en Vercel
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
