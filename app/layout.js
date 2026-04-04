import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Vines Connection | Melanin Intelligence',
  description: 'The official framework for Melanin-RAS Peptide Entrainment and biological sovereignty research.',
  keywords: 'collapse recursion, way of 9, melanin code, Shawn Cummings, consciousness, CRE, logic, recursion',
  openGraph: {
    title: 'Vines Connection | Melanin Intelligence',
    description: 'The official framework for Melanin-RAS Peptide Entrainment and biological sovereignty research.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="spiral-bg" />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
