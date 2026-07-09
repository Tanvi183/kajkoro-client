"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WorkerSidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const mainLinks = [
    { label: "Find jobs", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", href: "/worker/dashboard" },
    { label: "Completed jobs", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", href: "/worker/dashboard/completed" },
    { label: "My jobs", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", href: "/worker/dashboard/my-jobs" },
  ];

  const secondaryLinks = [
    { label: "Leaderboard", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", href: "/worker/dashboard/leaderboard" },
    { label: "Withdraw", icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4", href: "/worker/dashboard/withdraw" },
    { label: "Refer & earn", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", href: "/worker/dashboard/refer" },
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity" 
          aria-hidden="true"
          onClick={onClose}
        />
      )}

      <div 
        className={`fixed inset-y-0 left-0 z-50 flex w-72 max-w-[calc(100%-3rem)] flex-col bg-white shadow-xl transition-transform duration-300 ease-in-out dark:bg-slate-950 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <Link href="/worker/dashboard" className="flex items-center gap-1" onClick={onClose}>
            <span className="text-2xl font-bold tracking-tight text-[#0a2540] dark:text-white">
              Kaj
            </span>
            <span className="ml-2 rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-900/50 dark:text-blue-400">Worker</span>
          </Link>
          <button 
            type="button" 
            onClick={onClose}
            className="rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none dark:hover:bg-slate-800"
          >
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pt-6 px-4 pb-20">
          <nav className="space-y-1">
            {mainLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className={`group flex items-center gap-x-3 rounded-md px-3 py-3 text-sm font-semibold leading-6 transition-colors ${
                    isActive 
                      ? "bg-[#059669] text-white" 
                      : "text-[#185e82] hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                  }`}
                >
                  <svg 
                    className={`h-5 w-5 shrink-0 ${isActive ? "text-white" : "text-[#769cb0] group-hover:text-slate-700 dark:text-slate-500 dark:group-hover:text-slate-300"}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                  </svg>
                  {link.label}
                  {isActive && <svg className="ml-auto h-4 w-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}
                </Link>
              );
            })}
          </nav>

          <hr className="my-6 border-slate-100 dark:border-slate-800" />

          <nav className="space-y-1">
            {secondaryLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className={`group flex items-center gap-x-3 rounded-md px-3 py-3 text-sm font-semibold leading-6 transition-colors ${
                    isActive 
                      ? "bg-[#059669] text-white" 
                      : "text-[#185e82] hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                  }`}
                >
                  <svg 
                    className={`h-5 w-5 shrink-0 ${isActive ? "text-white" : "text-[#769cb0] group-hover:text-slate-700 dark:text-slate-500 dark:group-hover:text-slate-300"}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                  </svg>
                  {link.label}
                  {isActive && <svg className="ml-auto h-4 w-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
