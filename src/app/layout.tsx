import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { SessionProvider } from "next-auth/react"; // ✅ Import this
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "DeChat App",
  description: "A real-time chat application built with Next.js and Socket.IO",
  icons: [{ rel: "icon", url: "/DCf.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${geist.variable}`}>
      <body>
      <SessionProvider>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
