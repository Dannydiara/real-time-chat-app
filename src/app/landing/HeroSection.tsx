'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player';
import Link from 'next/link';
import { buttonVariants } from '~/components/ui/button';
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";

export default function HeroSection() {
  const [animData, setAnimData] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    fetch('/animations/chat.json')
      .then((res) => res.json())
      .then((data: Record<string, unknown>) => setAnimData(data))
      .catch(console.error);
  }, []);

  return (
    <section className="relative flex mt-4 md:mt-0 bg-heroLight dark:bg-heroDark text-gray-900 min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-5 flex flex-col-reverse md:flex-row items-start md:items-center gap-8 md:gap-20">
        {/* Text + CTA */}
        <motion.div
          className="w-full md:w-1/2 flex-1 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="md:text-4xl lg:text-5xl font-extrabold leading-tight text-purple-400 title-font sm:text-4xl text-3xl mb-4">
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>Welcome to</span>
            <br className="hidden lg:inline-block"></br><span className="text-accent"> DeChat</span>
          </h1>
          <p className="mb-8 leading leading-relaxed max-w-lg text-sm md:text-md lg:text-lg text-secondary font-medium text-center md:text-left">
            Real‑time rooms, one‑to‑one chats, file sharing, theme support & more.
          </p>
          <div className="flex flex-row gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/api/auth/signin" className={`${buttonVariants({ size: 'lg' })} w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 hover:text-gray-600 inline-flex border-0`}>
                Get Started
              </Link>
            </motion.div>
            <motion.div whileHover={{scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                href="#features"
                className={`${buttonVariants({ variant: 'outline', size: 'lg' })} w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 hover:text-gray-600 transition-colors inline-flex`}
                >
                Learn More
                </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Lottie Animation */}
        <motion.div
          className="flex-1 flex justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
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
      
      {/* Scroll Down Arrow */}
      <Link
        href="#features"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-700 animate-bounce hover:text-blue-500 transition-colors"
      >
        <DoubleArrowDownIcon className="w-6 h-6 md:w-12 md:h-12 opacity-30" />
      </Link>
    </section>
  );
}
