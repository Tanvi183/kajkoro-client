import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const MOCK_EMPLOYERS = [
  { id: "TechGrowth", name: "TechGrowth", verified: true, jobsPosted: 45, totalPaid: 12500.00, rating: 4.9 },
  { id: "AppStudios", name: "AppStudios", verified: true, jobsPosted: 12, totalPaid: 3200.00, rating: 4.7 },
  { id: "GlobalSurveyInc", name: "Global Survey Inc", verified: false, jobsPosted: 5, totalPaid: 450.00, rating: 4.2 },
  { id: "SocialBoost", name: "SocialBoost Agency", verified: true, jobsPosted: 120, totalPaid: 45000.00, rating: 4.8 },
];

export default function EmployersDirectoryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Top Employers
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Discover trusted companies hiring for micro-jobs on KajKoro.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_EMPLOYERS.map((employer) => (
          <Link key={employer.id} href={`/employers/${employer.id}`} className="block group">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-emerald-200 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-emerald-900/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
                    {employer.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-1 group-hover:text-emerald-600 transition-colors">
                      {employer.name}
                      {employer.verified && (
                        <svg className="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      <svg className="h-3 w-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{employer.rating} Rating</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Jobs Posted</p>
                  <p className="font-semibold text-slate-900 dark:text-white">{employer.jobsPosted}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Total Paid</p>
                  <p className="font-semibold text-slate-900 dark:text-white">${employer.totalPaid.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
