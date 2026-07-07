"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export function AccountDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1.5 pl-1.5 pr-3 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6a9e40] text-sm font-bold text-white">
          M
        </div>
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Account</span>
        <svg className={`h-4 w-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 origin-top-right rounded-xl border border-slate-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:border-slate-800 dark:bg-slate-950 z-50 overflow-hidden">
          {/* User Info Header */}
          <div className="flex items-center gap-3 p-4 bg-[#f9fbfc] dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6a9e40] text-xl font-bold text-white">
              M
            </div>
            <div className="flex flex-col min-w-0">
              <span className="truncate text-base font-bold text-slate-900 dark:text-white">
                Mohammed Sana Ullah
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="truncate text-xs text-slate-500">sanaullahtanvi183...</span>
                <span className="shrink-0 rounded bg-slate-200 px-1.5 py-0.5 text-[10px] font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  ID: 999353
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="p-2 space-y-0.5">
            {[
              { label: "Deposit", icon: "M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z", href: "/dashboard/deposit" },
              { label: "Withdrawal", icon: "M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010-18z", href: "/dashboard/withdraw" },
              { label: "Leaderboard", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", href: "/dashboard/leaderboard" },
              { label: "Settings", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", href: "/dashboard/settings" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-[#185e82] hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
                </svg>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-slate-100 p-2 dark:border-slate-800">
            <button
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-[#d32f2f] hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
