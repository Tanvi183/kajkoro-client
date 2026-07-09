import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminDashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h4 className="text-[16px] font-bold uppercase text-slate-800 dark:text-slate-100 m-0">Dashboard</h4>
        </div>
        <div className="flex items-center text-sm font-medium text-slate-500">
          <Link href="#" className="hover:text-emerald-500">KajKoro</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-slate-400">Dashboard</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        {/* Card 1 */}
        <div className="rounded-md border-0 bg-white p-5 shadow-[0_0_35px_0_rgba(154,161,171,.15)] dark:bg-slate-900">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500 mb-1">Total Users</p>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">12,450</h3>
            </div>
            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-500 flex items-center mr-2 font-medium">
              <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              5.27%
            </span>
            <span className="text-slate-400">Since last month</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-md border-0 bg-white p-5 shadow-[0_0_35px_0_rgba(154,161,171,.15)] dark:bg-slate-900">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500 mb-1">Active Campaigns</p>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">342</h3>
            </div>
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-500 flex items-center mr-2 font-medium">
              <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              1.08%
            </span>
            <span className="text-slate-400">Since last month</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-md border-0 bg-white p-5 shadow-[0_0_35px_0_rgba(154,161,171,.15)] dark:bg-slate-900">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500 mb-1">Total Revenue</p>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">৳45,200.50</h3>
            </div>
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
              <span className="text-lg font-bold">৳</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-red-500 flex items-center mr-2 font-medium">
              <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              2.54%
            </span>
            <span className="text-slate-400">Since last month</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="rounded-md border-0 bg-white p-5 shadow-[0_0_35px_0_rgba(154,161,171,.15)] dark:bg-slate-900">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500 mb-1">Pending Withdrawals</p>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">18</h3>
            </div>
            <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-slate-400">Needs review today</span>
          </div>
        </div>
      </div>

      {/* Main Charts Area Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 rounded-md border-0 bg-white p-5 shadow-[0_0_35px_0_rgba(154,161,171,.15)] dark:bg-slate-900 min-h-[350px]">
          <h4 className="text-sm font-semibold text-slate-800 dark:text-white mb-4">Revenue Overview</h4>
          <div className="flex h-full items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800/50">
            <p className="text-slate-400 text-sm">Chart Placeholder</p>
          </div>
        </div>
        <div className="rounded-md border-0 bg-white p-5 shadow-[0_0_35px_0_rgba(154,161,171,.15)] dark:bg-slate-900 min-h-[350px]">
          <h4 className="text-sm font-semibold text-slate-800 dark:text-white mb-4">User Growth</h4>
          <div className="flex h-full items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800/50">
            <p className="text-slate-400 text-sm">Chart Placeholder</p>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="rounded-md border-0 bg-white shadow-[0_0_35px_0_rgba(154,161,171,.15)] dark:bg-slate-900 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <h4 className="text-[15px] font-semibold text-slate-800 dark:text-white m-0">Recent Activity</h4>
          <Button variant="outline" size="sm" className="h-8 text-xs font-medium border-slate-200">
            Export
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-3 font-medium text-slate-800 dark:text-slate-200">Activity Type</th>
                <th className="px-6 py-3 font-medium text-slate-800 dark:text-slate-200">User</th>
                <th className="px-6 py-3 font-medium text-slate-800 dark:text-slate-200">Date</th>
                <th className="px-6 py-3 font-medium text-slate-800 dark:text-slate-200">Status</th>
                <th className="px-6 py-3 font-medium text-slate-800 dark:text-slate-200 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-800 dark:text-white">New Registration</td>
                <td className="px-6 py-4">@johndoe</td>
                <td className="px-6 py-4">09 Jul 2026</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center rounded bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link href="#" className="text-emerald-500 hover:text-emerald-600 font-medium text-xs">View Details</Link>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-800 dark:text-white">Campaign Approval</td>
                <td className="px-6 py-4">@marketing_pro</td>
                <td className="px-6 py-4">09 Jul 2026</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link href="#" className="text-emerald-500 hover:text-emerald-600 font-medium text-xs">View Details</Link>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-800 dark:text-white">Withdrawal Request</td>
                <td className="px-6 py-4">@sarah99</td>
                <td className="px-6 py-4">08 Jul 2026</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center rounded bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                    Paid
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link href="#" className="text-emerald-500 hover:text-emerald-600 font-medium text-xs">View Details</Link>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-800 dark:text-white">Support Ticket</td>
                <td className="px-6 py-4">@alex_dev</td>
                <td className="px-6 py-4">07 Jul 2026</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                    Open
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link href="#" className="text-emerald-500 hover:text-emerald-600 font-medium text-xs">View Details</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
