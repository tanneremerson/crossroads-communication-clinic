import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        seriff: ['var(--font-corm)'],
      },
      colors: {
        primary: {
          '100': '#f7eae6',
          '200': '#e3c3b8',
          '300': '#cc9d8d',
          '400': '#b57b67',
          '500': '#9e5d47',
          '600': '#87462f',
          '700': '#70311c',
          '800': '#59210d',
          '900': '#401303',
        },
        secondary: {
          '100': '#e9eeef',
          '200': '#c5dce3',
          '300': '#99bfcc',
          '400': '#6ea3b5',
          '500': '#47889e',
          '600': '#367387',
          '700': '#225d70',
          '800': '#124759',
          '900': '#03161d',
        },
        grey: {
          '100': '#fcfbf5',
          '200': '#e0ded5',
          '300': '#aba79a',
          '400': '#857f6d',
          '500': '#5f5948',
          '600': '#4f4831',
          '700': '#40371f',
          '800': '#2e2610',
          '900': '#201906',
        },
      },
    },
  },
  plugins: [],
};
export default config;
