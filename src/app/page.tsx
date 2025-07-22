'use client';

import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading…</p>;

  if (!session) {
    return (
      <div className="h-screen flex items-center justify-center">
        <button onClick={() => signIn()} className="btn-primary">
          Sign in to join D‑Chat
        </button>
      </div>
    );
  }

  // Example static rooms; you can fetch these via tRPC later
  const publicRooms = ['general', 'random', 'tech'];

  return (
    <div className="min-h-screen p-6 space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome, {session.user?.name}!</h1>
        <button onClick={() => signOut()} className="btn-ghost">
          Sign out
        </button>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">Public Rooms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {publicRooms.map((room) => (
            <Link
              key={room}
              href={`/chat/${room}`}
              className="btn-secondary"
            >
              #{room}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Direct Messages</h2>
        <div className="space-y-2">
          {/* Replace with dynamic DM list via tRPC + Prisma */}
          <Link href="/chat/abc123" className="btn-outline">
            Chat with Alice
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Create New Room</h2>
        <form className="flex space-x-2">
          <input
            type="text"
            placeholder="Room name"
            className="input"
          />
          <button type="submit" className="btn-primary">
            Create
          </button>
        </form>
      </section>
    </div>
  );
}
