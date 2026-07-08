"use client";

import React, { useState, useRef, useEffect } from "react";

export function NotificationDropdown() {
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
        className="flex items-center justify-center p-2 rounded-md hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 text-emerald-700 dark:text-emerald-500 dark:hover:bg-slate-800 cursor-pointer"
      >
        <span className="sr-only">View notifications</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 origin-top-right rounded-xl border border-slate-200 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:border-slate-800 dark:bg-slate-950 z-50 overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-slate-100 dark:border-slate-800">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Notifications
            </h3>
          </div>

          {/* Empty Content Area (can be populated later) */}
          <div className="min-h-[60px] bg-white dark:bg-slate-950">
            {/* List of notifications will go here */}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-center border-t border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900/50">
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-[#059669] hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Mark all read
            </button>
            <div className="mx-4 h-4 w-px bg-slate-300 dark:bg-slate-700" />
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-[#f43f5e] hover:text-rose-600 transition-colors cursor-pointer"
            >
              Clear all
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
