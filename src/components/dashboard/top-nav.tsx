"use client";

import React from "react";
import Link from "next/link";
import { AccountDropdown } from "./account-dropdown";

interface TopNavProps {
  onMenuClick: () => void;
}

export function TopNav({ onMenuClick }: TopNavProps) {
  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-slate-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 dark:border-slate-800 dark:bg-slate-950">
      {/* Hamburger Menu (visible on all screens based on design, but typically acts as a toggle) */}
      <button
        type="button"
        onClick={onMenuClick}
        className="-m-2.5 p-2.5 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white focus:outline-none"
      >
        <span className="sr-only">Open sidebar</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {/* Logo */}
      <div className="flex flex-1 items-center gap-2">
        <Link href="/dashboard" className="flex items-center gap-1">
          <span className="text-2xl font-bold tracking-tight text-[#0a2540] dark:text-white">
            Ajker<span className="text-[#059669]">kaj</span>
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-x-4 lg:gap-x-6">
        {/* Notification Bell */}
        <button
          type="button"
          className="-m-2.5 p-2.5 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 relative focus:outline-none"
        >
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>

        {/* Separator */}
        <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-slate-200 dark:bg-slate-800" aria-hidden="true" />

        {/* Total Balance */}
        <div className="hidden sm:flex flex-col items-end">
          <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Balance</span>
          <span className="text-lg font-bold text-[#059669]">৳0.00</span>
        </div>

        {/* Separator */}
        <div className="hidden sm:block lg:h-6 lg:w-px lg:bg-slate-200 dark:bg-slate-800" aria-hidden="true" />

        {/* Account Dropdown */}
        <AccountDropdown />
      </div>
    </header>
  );
}
