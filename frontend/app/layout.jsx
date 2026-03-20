// File Purpose: Defines the root app layout, global fonts, metadata, and shared wrappers.

import './globals.css';
import { Montserrat, Poppins } from 'next/font/google';
import CookieBanner from '../components/CookieBanner';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap'
});

const zcodezLogoIcon = 'https://res.cloudinary.com/dfig2zrrd/image/upload/v1773466147/zcodez-logo_sm4lnr.png';

export const metadata = {
  title: 'Software Development Company in India | zcodez',
  description: 'zcodez Software Solutions LLP for software development, design, and digital services.',
  icons: {
    icon: [
      { url: zcodezLogoIcon, type: 'image/png' }
    ],
    shortcut: [zcodezLogoIcon],
    apple: [
      { url: zcodezLogoIcon, type: 'image/png' }
    ]
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className={`${montserrat.variable} ${poppins.variable}`}>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

