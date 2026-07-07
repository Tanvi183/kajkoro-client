import Link from "next/link";
import React from "react";

export function PublicFooter() {
  return (
    <footer className="bg-slate-950 py-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-2xl font-bold tracking-tight text-white">
                Ajker<span className="text-emerald-500">kaj</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              The world's most trusted hybrid marketplace for high-impact micro-jobs.
              Join professionals and start earning today.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Platform
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <Link href="/jobs" className="text-sm hover:text-emerald-400">
                  Find Work
                </Link>
              </li>
              <li>
                <Link href="/employers" className="text-sm hover:text-emerald-400">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm hover:text-emerald-400">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <Link href="/about" className="text-sm hover:text-emerald-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-emerald-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-emerald-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <Link href="/privacy" className="text-sm hover:text-emerald-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-emerald-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Ajkerkaj Marketplace. All rights reserved.
          </p>
          <div className="mt-4 flex gap-4 sm:mt-0">
            <span className="h-6 w-6 rounded-full bg-slate-800" />
            <span className="h-6 w-6 rounded-full bg-slate-800" />
            <span className="h-6 w-6 rounded-full bg-slate-800" />
          </div>
        </div>
      </div>
    </footer>
  );
}
