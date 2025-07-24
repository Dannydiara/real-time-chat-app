'use client';

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-indigo-600 text-gray-900">
      {children}
      {/* You could add a global footer here too */}
    </main>
  );
}
