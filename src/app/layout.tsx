import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abdelrahman | Portfolio',
  description: 'Professional portfolio with a dark design and distinctive neon colors',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' dir='ltr' className='scroll-smooth'>
      <body className='antialiased bg-[#0b0f19] text-gray-100'>{children}</body>
    </html>
  );
}
