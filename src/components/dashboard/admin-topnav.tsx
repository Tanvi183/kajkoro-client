"use client";

import React from "react";
import { AccountDropdown } from "./account-dropdown";
import { NotificationDropdown } from "./notification-dropdown";

interface AdminTopNavProps {
  onMenuClick: () => void;
}

export function AdminTopNav({ onMenuClick }: AdminTopNavProps) {
  return (
    <header className="sticky top-0 z-40 flex h-[70px] shrink-0 items-center gap-x-4 border-b border-slate-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 dark:border-slate-800 dark:bg-slate-950">
      {/* Hamburger Menu (visible on all screens based on design, but typically acts as a toggle) */}
      <button
        type="button"
        onClick={onMenuClick}
        className="-m-2.5 p-2.5 text-slate-700 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-500 focus:outline-none lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {/* Topbar Search */}
      <div className="flex flex-1 items-center gap-2 lg:ml-64">
        <div className="relative hidden lg:flex w-full max-w-md items-center">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="search"
            name="search"
            id="search"
            className="block w-full rounded-full border-0 py-1.5 pl-10 pr-3 text-slate-900 bg-slate-100 ring-1 ring-inset ring-transparent placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6 dark:bg-slate-900 dark:text-white dark:focus:ring-emerald-500"
            placeholder="Quick Search..."
          />
        </div>
      </div>

      <div className="flex items-center gap-x-4 lg:gap-x-6">
        {/* Notification Dropdown */}
        <NotificationDropdown />

        {/* Separator */}
        <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-slate-200 dark:bg-slate-800" aria-hidden="true" />

        {/* Account Dropdown */}
        <AccountDropdown />
      </div>
    </header>
  );
}
