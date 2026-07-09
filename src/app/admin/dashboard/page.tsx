import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminDashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Admin Overview</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Monitor platform activity and manage users.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Users</div>
          <div className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">12,450</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Campaigns</div>
          <div className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">342</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Revenue</div>
          <div className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">$45,200.50</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Pending Withdrawals</div>
          <div className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">18</div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-800 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Activity</h2>
        </div>
        <div className="p-0">
          <ul className="divide-y divide-slate-200 dark:divide-slate-800">
            <li className="px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">New user registered: <span className="font-semibold text-purple-600 dark:text-purple-400">@johndoe</span></p>
                <p className="text-xs text-slate-500">2 minutes ago</p>
              </div>
            </li>
            <li className="px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">Campaign #4521 approved</p>
                <p className="text-xs text-slate-500">15 minutes ago</p>
              </div>
            </li>
            <li className="px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">Withdrawal request from <span className="font-semibold text-purple-600 dark:text-purple-400">@sarah99</span></p>
                <p className="text-xs text-slate-500">1 hour ago</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
