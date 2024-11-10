import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Cuisine Restaurant',
  description: 'The Cuisine Restaurant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
