import '~/styles/globals.css';
import { type Metadata } from 'next';
import { Geist } from 'next/font/google';
import ClientProviders from '~/components/ClientProviders';

export const metadata: Metadata = {
  title: 'DeChat App',
  description: 'A real-time chat application built with Next.js and Socket.IO',
  icons: [{ rel: 'icon', url: '/DCf.ico' }],
};

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${geist.variable}`}>
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
