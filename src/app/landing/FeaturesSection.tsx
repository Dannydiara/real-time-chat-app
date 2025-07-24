'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  { icon: '/icons/chat.svg', title: 'Real‑Time Chat', desc: 'Instant rooms & DMs via Socket.IO.' },
  { icon: '/icons/lock.svg', title: 'Secure Auth', desc: 'NextAuth with OAuth & magic links.' },
  { icon: '/icons/theme.svg', title: 'Custom Themes', desc: 'Light & dark mode out of the box.' },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full bg-white/10 py-20 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 backdrop-blur-md rounded-lg text-center"
          >
            <div className="flex justify-center mb-4">
              <Image src={f.icon} width={48} height={48} alt={`${f.title} icon`} />
            </div>
            <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-200">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
