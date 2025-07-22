import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { SessionProvider } from "next-auth/react"; // ✅ Import this
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "D-Chat App",
  description: "A real-time chat application built with Next.js and Socket.IO",
  icons: [{ rel: "icon", url: "/D.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <SessionProvider> {/* ✅ Wrap your app here */}
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
