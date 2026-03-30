import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      playfair: ['"Playfair Display"', 'serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      backdropBlur: { xs: '2px' }
    }
  },
  plugins: []
};

export default config;