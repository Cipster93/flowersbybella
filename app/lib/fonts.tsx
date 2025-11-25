import localFont from 'next/font/local';

export const dancingScript = localFont({
  src: [
    {
      path: '../../public/fonts/static/DancingScript-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-dancing-script',
});

export const caveat = localFont({
  src: [
    {
      path: '../../public/fonts/static/Caveat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-caveat',
});