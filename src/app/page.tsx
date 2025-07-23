'use client';

import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function HomePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Loading…</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="h-screen flex items-center justify-center">
        <button
          onClick={() => signIn()}
          className="px-6 py-3 bg-blue-600 text-white rounded"
        >
          Sign in to join DeChat
        </button>
      </div>
    );
  }

  const publicRooms = ['general', 'random', 'tech'];

  return (
    <div className="min-h-screen p-6 space-y-8">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welcome, {session.user?.name}!</h1>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Sign out
        </button>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Public Rooms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {publicRooms.map((room) => (
            <Link
              key={room}
              href={`/chat/${room}`}
              className="block text-center py-4 bg-gray-200 rounded hover:bg-gray-300"
            >
              #{room}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Direct Messages</h2>
        <p className="text-gray-500">— your 1‑to‑1 chats will show up here —</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Create New Room</h2>
        <form className="flex max-w-sm gap-2">
          <input
            type="text"
            placeholder="Room name"
            className="flex-1 border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Create
          </button>
        </form>
      </section>
    </div>
  );
}
