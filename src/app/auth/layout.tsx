import React from "react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans dark:bg-slate-950">
      <header className="absolute top-0 w-full z-10 p-6">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Kaj
          </span>
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center p-4">
        {children}
      </main>
    </div>
  );
}
