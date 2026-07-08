import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// Mock data matching the visual references
const MOCK_DASHBOARD_JOBS = [
  { id: "job-1", title: "টেলিগ্রাম গ্রুপে জয়েন করা ✅", category: "Telegram", categoryColor: "bg-[#0ea5e9] text-white", reward: 3, done: 58325, total: 60000 },
  { id: "job-2", title: "টেলিগ্রাম গ্রুপে জয়েন করা 💰", category: "Telegram", categoryColor: "bg-[#0ea5e9] text-white", reward: 3, done: 58135, total: 100000 },
  { id: "job-3", title: "রেজিস্ট্রেশন করে ইনকাম 🎁", category: "Survey", categoryColor: "bg-[#eab308] text-white", reward: 10, done: 8253, total: 9000 },
  { id: "job-4", title: "সঠিক কাজে জমা দিলে ২০ টাকা 💥", category: "Sign Up", categoryColor: "bg-[#f97316] text-white", reward: 20, done: 9, total: 12 },
  { id: "job-5", title: "Easy earn অ্যাপ এর কাজ🤑💸", category: "Sign Up", categoryColor: "bg-[#f97316] text-white", reward: 20, done: 23, total: 26 },
  { id: "job-6", title: "সাইন আপ করে ২০ টাকা 🤑💸", category: "Sign Up", categoryColor: "bg-[#f97316] text-white", reward: 20, done: 29, total: 30 },
  { id: "job-7", title: "সহজ কাজ ভুল কাজে দিলে ব্যান", category: "Sign Up", categoryColor: "bg-[#f97316] text-white", reward: 20, done: 9, total: 12 },
  { id: "job-8", title: "নতুন পুরাতন সবার জন্য কাজ", category: "Mobile Apps", categoryColor: "bg-[#e11d48] text-white", reward: 10, done: 8, total: 10 },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Header Area */}
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Available Jobs
            </h1>
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-400">
              {MOCK_DASHBOARD_JOBS.length} Jobs Available
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
            Professional micro-tasks verified in real-time.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-4 w-full md:w-[400px] lg:w-[500px]">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search Jobs..."
              className="block w-full rounded-lg border-0 py-3.5 pl-12 pr-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 text-base leading-6 dark:bg-slate-900 dark:text-white dark:ring-slate-700"
            />
          </div>
          
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </div>
            <select
              className="block w-full appearance-none rounded-lg border-0 py-3.5 pl-12 pr-10 text-slate-900 font-medium shadow-sm ring-1 ring-inset ring-emerald-200 bg-emerald-50 focus:ring-2 focus:ring-inset focus:ring-emerald-600 text-base leading-6 dark:bg-slate-900 dark:text-white dark:ring-slate-700 cursor-pointer"
            >
              <option>All categories</option>
              <option>Telegram</option>
              <option>Survey</option>
              <option>Sign Up</option>
              <option>Mobile Apps</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Jobs List */}
      <div className="space-y-4">
        {MOCK_DASHBOARD_JOBS.map((job) => {
          const progressPercent = Math.min(100, Math.round((job.done / job.total) * 100));
          
          return (
            <Link 
              key={job.id} 
              href={`/jobs/${job.id}`}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all dark:border-slate-800 dark:bg-slate-950 dark:hover:border-emerald-600/50"
            >
              {/* Left Content */}
              <div className="flex-1 w-full max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-flex items-center rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${job.categoryColor}`}>
                    {job.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white truncate">
                    {job.title}
                  </h3>
                </div>

                <div className="w-full max-w-xs mt-4">
                  <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1">
                    <span>DONE</span>
                    <span className="text-[#059669]">{job.done.toLocaleString()} / {job.total.toLocaleString()}</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div 
                      className="h-full bg-[#059669] rounded-full" 
                      style={{ width: `${progressPercent}%` }} 
                    />
                  </div>
                </div>
              </div>

              {/* Right Content (Payout) */}
              <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0 sm:border-l border-slate-100 sm:pl-6 dark:border-slate-800">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white leading-none">
                    ৳{job.reward}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                    Payout
                  </span>
                </div>
                
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#059669] text-white hover:bg-emerald-700 transition-colors">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
