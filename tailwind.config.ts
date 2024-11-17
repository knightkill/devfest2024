import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-marketing': 'url(\'/assets/images/bg.svg\')',
      },
    },
  },
  plugins: [],
} satisfies Config;
