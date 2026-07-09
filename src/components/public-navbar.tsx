import Link from "next/link";
import React from "react";

export function PublicNavbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Kaj
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/jobs"
            className="text-sm font-medium text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
          >
            Find Work
          </Link>
          <Link
            href="/employers"
            className="text-sm font-medium text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
          >
            Post a Job
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
          >
            Pricing
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/auth/login"
            className="hidden text-sm font-medium text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 sm:block"
          >
            Log in
          </Link>
          <Link
            href="/auth/register"
            className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
