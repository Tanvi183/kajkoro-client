import React from "react";
import Link from "next/link";
import { JobCard } from "@/components/jobs/job-card";

export default async function EmployerProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Mock data for this employer
  const employer = {
    id,
    name: id,
    verified: true,
    jobsPosted: 45,
    totalPaid: 12500.00,
    rating: 4.9,
    joinDate: "Jan 2025",
    description: "Leading technology firm specializing in AI and mobile app development. We regularly post micro-jobs for app testing, QA, and social media engagement to help us improve our products.",
    activeJobs: [
      { id: "job-1", title: "YouTube SEO & Tags Optimization", category: "Social Media", reward: 0.50, slotsFilled: 21, slotsTotal: 100, country: "Global" },
      { id: "job-2", title: "Install and Review Trading App", category: "Mobile App", reward: 1.20, slotsFilled: 46, slotsTotal: 50, country: "US/UK" },
    ]
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back button */}
      <Link href="/employers" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 mb-8">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Employers Directory
      </Link>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Profile Sidebar */}
        <div className="w-full lg:w-80 shrink-0">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-col items-center text-center border-b border-slate-100 pb-6 dark:border-slate-800">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-3xl font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300 mb-4">
                {employer.name.charAt(0)}
              </div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
                {employer.name}
                {employer.verified && (
                  <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </h1>
              <p className="mt-1 text-sm text-slate-500">Member since {employer.joinDate}</p>
            </div>

            <div className="py-6 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">About</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {employer.description}
              </p>
            </div>

            <div className="pt-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Jobs Posted</span>
                <span className="font-semibold text-slate-900 dark:text-white">{employer.jobsPosted}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Total Paid</span>
                <span className="font-semibold text-slate-900 dark:text-white">${employer.totalPaid.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Average Rating</span>
                <span className="font-semibold text-slate-900 dark:text-white flex items-center gap-1">
                  <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {employer.rating}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Jobs Grid */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Active Jobs by {employer.name}</h2>
          
          <div className="space-y-4">
            {employer.activeJobs.length > 0 ? (
              employer.activeJobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))
            ) : (
              <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-xl dark:border-slate-800">
                <p className="text-slate-500 dark:text-slate-400">No active jobs at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
