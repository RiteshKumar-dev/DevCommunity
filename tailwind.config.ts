import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const colors = require('tailwindcss/colors');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      colors: {
        lightBackground: '#f8f9fa',
        lightText: '#212529',
        darkBackground: '#09090b',
        darkText: '#e9ecef',
        primary: '#000',
        'color-1': 'hsl(var(--color-1))',
        'color-2': 'hsl(var(--color-2))',
        'color-3': 'hsl(var(--color-3))',
        'color-4': 'hsl(var(--color-4))',
        'color-5': 'hsl(var(--color-5))',
      },
      animation: {
        'shimmer-slide':
          'shimmer-slide var(--speed) ease-in-out infinite alternate',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        'meteor-effect': 'meteor 5s linear infinite',
      },
      keyframes: {
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
        'spin-around': {
          '0%': {
            transform: 'translateZ(0) rotate(0)',
          },
          '15%, 35%': {
            transform: 'translateZ(0) rotate(90deg)',
          },
          '65%, 85%': {
            transform: 'translateZ(0) rotate(270deg)',
          },
          '100%': {
            transform: 'translateZ(0) rotate(360deg)',
          },
        },
        'shimmer-slide': {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)',
          },
        },
        'aurora-border': {
          '0%, 100%': { borderRadius: '37% 29% 27% 27% / 28% 25% 41% 37%' },
          '25%': { borderRadius: '47% 29% 39% 49% / 61% 19% 66% 26%' },
          '50%': { borderRadius: '57% 23% 47% 72% / 63% 17% 66% 33%' },
          '75%': { borderRadius: '28% 49% 29% 100% / 93% 20% 64% 25%' },
        },
        'aurora-1': {
          '0%, 100%': { top: '0', right: '0' },
          '50%': { top: '50%', right: '25%' },
          '75%': { top: '25%', right: '50%' },
        },
        'aurora-2': {
          '0%, 100%': { top: '0', left: '0' },
          '60%': { top: '75%', left: '25%' },
          '85%': { top: '50%', left: '50%' },
        },
        'aurora-3': {
          '0%, 100%': { bottom: '0', left: '0' },
          '40%': { bottom: '50%', left: '25%' },
          '65%': { bottom: '25%', left: '50%' },
        },
        'aurora-4': {
          '0%, 100%': { bottom: '0', right: '0' },
          '50%': { bottom: '25%', right: '40%' },
          '90%': { bottom: '50%', right: '25%' },
        },
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
