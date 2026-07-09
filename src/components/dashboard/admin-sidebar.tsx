"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminSidebar({ isOpen, onClose }: SidebarProps) {
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
    { label: "Overview", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", href: "/admin/dashboard" },
    { label: "Manage Users", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", href: "/admin/dashboard/users" },
    { label: "All Campaigns", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", href: "/admin/dashboard/campaigns" },
    { label: "Withdrawals", icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z", href: "/admin/dashboard/withdrawals" },
  ];

  const secondaryLinks = [
    { label: "Support Tickets", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z", href: "/admin/dashboard/support" },
    { label: "Contact Messages", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", href: "/admin/dashboard/contacts" },
    { label: "Platform Settings", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", href: "/admin/dashboard/settings" },
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity lg:hidden" 
          aria-hidden="true"
          onClick={onClose}
        />
      )}

      <div 
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-[#313a46] text-[#8391a2] shadow-xl transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header / Logo */}
        <div className="flex h-[70px] items-center justify-center border-b border-[#3e4855] px-6">
          <Link href="/admin/dashboard" className="flex items-center gap-2" onClick={() => window.innerWidth < 1024 && onClose()}>
            <span className="text-2xl font-bold tracking-tight text-white">
              Kaj<span className="text-emerald-500">Koro</span>
            </span>
          </Link>
          <button 
            type="button" 
            onClick={onClose}
            className="ml-auto block rounded-md p-2 text-slate-400 hover:text-white lg:hidden"
          >
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* User Info Wrapper (Optional in paces, but looks good) */}
        <div className="flex items-center gap-3 border-b border-[#3e4855] p-6 text-sm">
          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
            A
          </div>
          <div className="overflow-hidden">
            <p className="truncate font-medium text-slate-200">Admin User</p>
            <p className="truncate text-xs text-[#8391a2]">Administrator</p>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div className="flex-1 overflow-y-auto px-3 py-6 sidebar-scroll">
          <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-[#8391a2]">
            Navigation
          </div>
          <nav className="space-y-1 mb-8">
            {mainLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => window.innerWidth < 1024 && onClose()}
                  className={`group flex items-center gap-x-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive 
                      ? "bg-[#3a4450] text-white" 
                      : "text-[#8391a2] hover:bg-[#3a4450] hover:text-white"
                  }`}
                >
                  <svg 
                    className={`h-5 w-5 shrink-0 ${isActive ? "text-emerald-500" : "text-[#8391a2] group-hover:text-emerald-400"}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
                  </svg>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-[#8391a2]">
            System
          </div>
          <nav className="space-y-1">
            {secondaryLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => window.innerWidth < 1024 && onClose()}
                  className={`group flex items-center gap-x-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive 
                      ? "bg-[#3a4450] text-white" 
                      : "text-[#8391a2] hover:bg-[#3a4450] hover:text-white"
                  }`}
                >
                  <svg 
                    className={`h-5 w-5 shrink-0 ${isActive ? "text-emerald-500" : "text-[#8391a2] group-hover:text-emerald-400"}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
                  </svg>
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
