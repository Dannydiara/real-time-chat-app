'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player';
import Link from 'next/link';
import { buttonVariants } from '~/components/ui/button';

export default function HeroSection() {
  const [animData, setAnimData] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    fetch('/animations/chat.json')
      .then((res) => res.json())
      .then((data: Record<string, unknown>) => setAnimData(data))
      .catch(console.error);
  }, []);

  return (
    <section className="relative flex items-center justify-center bg-heroLight dark:bg-heroDark text-gray-900 min-h-screen min-w-screen overflow-x-hidden">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-20">
        {/* Text + CTA */}
        <motion.div
          className="w-full md:w-1/2 flex-1 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-purple-400">
            Welcome to <span className="text-accent">DeChat</span>
          </h1>
          <p className="max-w-lg text-sm md:text-md lg:text-lg text-secondary font-medium text-center">
            Real‑time rooms, one‑to‑one chats, file sharing, theme support & more.
          </p>
          <div className="flex flex-row sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/api/auth/signin" className={`${buttonVariants({ size: 'lg' })} w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4`}>
                Get Started
              </Link>
            </motion.div>
            <motion.div whileHover={{scale: 1.05, color: "#FF0000" }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#features"
                className={`${buttonVariants({ variant: 'outline', size: 'lg' })} w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4`}
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Lottie Animation */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {animData !== null && (
            <Lottie
              loop
              play
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
              animationData={animData as any}
              style={{ maxWidth: 500, height: 'auto' }}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
