'use client';

import Link from 'next/link';
import { buttonVariants } from '~/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-16 text-center">
      <Link href="/api/auth/signin" className={buttonVariants({ size: 'lg' })}>
        Start Chatting Now
      </Link>
    </section>
  );
}
