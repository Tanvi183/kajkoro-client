"use client";

import React, { useState } from "react";
import { AdminTopNav } from "@/components/dashboard/admin-topnav";
import { AdminSidebar } from "@/components/dashboard/admin-sidebar";
import { PublicFooter } from "@/components/public-footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] font-sans dark:bg-slate-950">
      <AdminTopNav onMenuClick={() => setSidebarOpen(true)} />
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content Area */}
      <main className="flex-1 w-full lg:ml-64 lg:w-[calc(100%-16rem)]">
        {children}
      </main>

      <div className="mt-20 lg:ml-64">
        <PublicFooter />
      </div>
    </div>
  );
}
