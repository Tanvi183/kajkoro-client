"use client";

import React, { useState } from "react";
import { TopNav } from "@/components/dashboard/top-nav";
import { BalanceBar } from "@/components/dashboard/balance-bar";
import { EmployerSidebar } from "@/components/dashboard/employer-sidebar";
import { PublicFooter } from "@/components/public-footer";

export default function EmployerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] font-sans dark:bg-slate-950">
      <TopNav onMenuClick={() => setSidebarOpen(true)} logoHref="/employer/dashboard" />
      <BalanceBar />
      <EmployerSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {children}
      </main>

      <div className="mt-20">
        <PublicFooter />
      </div>
    </div>
  );
}
