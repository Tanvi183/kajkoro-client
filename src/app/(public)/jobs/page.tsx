import React from "react";
import { JobCard } from "@/components/jobs/job-card";
import { Button } from "@/components/ui/button";

// Mock data for jobs
const MOCK_JOBS = [
  { id: "job-1", title: "YouTube SEO & Tags Optimization", category: "Social Media", reward: 0.50, slotsFilled: 21, slotsTotal: 100, country: "Global" },
  { id: "job-2", title: "Install and Review Trading App", category: "Mobile App", reward: 1.20, slotsFilled: 46, slotsTotal: 50, country: "US/UK" },
  { id: "job-3", title: "Write a 5-star Google Maps Review", category: "Writing", reward: 0.80, slotsFilled: 1, slotsTotal: 10, country: "Local" },
  { id: "job-4", title: "Complete a 5-minute Consumer Survey", category: "Surveys", reward: 0.40, slotsFilled: 57, slotsTotal: 200, country: "Global" },
  { id: "job-5", title: "Beta test new Crypto Wallet features", category: "Testing", reward: 2.50, slotsFilled: 24, slotsTotal: 30, country: "Global" },
  { id: "job-6", title: "Follow Instagram Page & Like 3 posts", category: "Social Media", reward: 0.15, slotsFilled: 89, slotsTotal: 150, country: "Global" },
  { id: "job-7", title: "Data Entry: Extract emails from website", category: "Data Entry", reward: 3.00, slotsFilled: 2, slotsTotal: 5, country: "Global" },
  { id: "job-8", title: "Sign up for Newsletter and verify email", category: "Sign Ups", reward: 0.25, slotsFilled: 110, slotsTotal: 500, country: "Global" },
];

export default function JobsListingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Find Work</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Browse available micro-jobs and start earning today.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter Sidebar */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h2 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center justify-between">
              Filters
              <button className="text-xs font-normal text-emerald-600 hover:text-emerald-500">Clear all</button>
            </h2>

            <div className="space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-3">Category</h3>
                <div className="space-y-2">
                  {["All Categories", "Social Media", "Mobile App", "Surveys", "Writing", "Testing"].map((cat, i) => (
                    <label key={i} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-600 dark:border-slate-700 dark:bg-slate-900" defaultChecked={i === 0} />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="h-px bg-slate-100 dark:bg-slate-800" />

              {/* Reward Range */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-3">Reward Range</h3>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-2.5 top-2 text-slate-500 text-sm">$</span>
                    <input type="number" placeholder="Min" className="w-full rounded-md border border-slate-300 py-1.5 pl-6 pr-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
                  </div>
                  <span className="text-slate-400">-</span>
                  <div className="relative flex-1">
                    <span className="absolute left-2.5 top-2 text-slate-500 text-sm">$</span>
                    <input type="number" placeholder="Max" className="w-full rounded-md border border-slate-300 py-1.5 pl-6 pr-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-100 dark:bg-slate-800" />

              {/* Country Filter */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-3">Target Country</h3>
                <select className="w-full rounded-md border border-slate-300 bg-white py-2 pl-3 pr-8 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                  <option>Global (All)</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>India</option>
                  <option>Bangladesh</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="flex-1">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-slate-500 dark:text-slate-400">Showing {MOCK_JOBS.length} jobs</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500 dark:text-slate-400">Sort by:</span>
              <select className="rounded-md border-none bg-transparent py-1 pl-2 pr-6 text-sm font-medium text-slate-900 focus:ring-0 dark:text-white">
                <option>Newest</option>
                <option>Highest Reward</option>
                <option>Easiest</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {MOCK_JOBS.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex items-center justify-center border-t border-slate-200 pt-8 dark:border-slate-800">
            <nav className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <div className="flex items-center gap-1">
                <button className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-600 text-sm font-medium text-white">1</button>
                <button className="flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">2</button>
                <button className="flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">3</button>
                <span className="flex h-9 w-9 items-center justify-center text-sm text-slate-400">...</span>
                <button className="flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">12</button>
              </div>
              <Button variant="outline" size="sm">Next</Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
