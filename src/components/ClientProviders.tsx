'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { TRPCReactProvider } from '~/trpc/react';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ParallaxProvider>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </ParallaxProvider>
    </SessionProvider>
  );
}
