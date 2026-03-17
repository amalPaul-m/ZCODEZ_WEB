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

export const metadata = {
  title: 'Software Development Company in India | zcodez',
  description: 'zcodez Software Solutions LLP for software development, design, and digital services.'
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
