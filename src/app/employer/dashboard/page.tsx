import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EmployerDashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Employer Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage your campaigns and review worker submissions.
          </p>
        </div>
        <Link href="/employer/dashboard/post">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm font-semibold h-10 px-6 w-full sm:w-auto">
            Post New Job
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Spend</div>
          <div className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">$1,250.00</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Campaigns</div>
          <div className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">3</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Pending Reviews</div>
          <div className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">24</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Completed Tasks</div>
          <div className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">852</div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-800">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Campaigns</h2>
        </div>
        <div className="p-6">
          <div className="text-center text-sm text-slate-500 dark:text-slate-400 py-8">
            <svg className="mx-auto h-12 w-12 text-slate-300 dark:text-slate-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p>You have no recent campaigns.</p>
            <Link href="/employer/dashboard/post" className="text-emerald-600 hover:text-emerald-500 font-semibold mt-2 inline-block">
              Create your first campaign
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
