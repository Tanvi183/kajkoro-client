"use client";

import React, { useState } from "react";
import { TopNav } from "@/components/dashboard/top-nav";
import { BalanceBar } from "@/components/dashboard/balance-bar";
import { Sidebar } from "@/components/dashboard/sidebar";
import { PublicFooter } from "@/components/public-footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] font-sans dark:bg-slate-950">
      <TopNav onMenuClick={() => setSidebarOpen(true)} />
      <BalanceBar />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Reusing PublicFooter for now as per design 1 which shows footer */}
      <div className="mt-20">
        <PublicFooter />
      </div>
    </div>
  );
}
