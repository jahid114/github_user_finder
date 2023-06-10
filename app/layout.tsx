import './globals.css';
import { Poppins } from 'next/font/google';
import Navbar from './components/Navbar';

const poppins = Poppins({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  preload: false,
});

export const metadata = {
  title: 'Github user Finder',
  description: 'Find Github user and there details here',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
