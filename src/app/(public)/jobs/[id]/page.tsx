import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Mock data for this job
  const job = {
    id,
    title: "YouTube SEO & Tags Optimization",
    category: "Social Media",
    reward: 0.50,
    slotsFilled: 21,
    slotsTotal: 100,
    country: "Global",
    employer: { name: "TechGrowth", verified: true, jobsPosted: 45 },
    instructions: `
      1. Go to YouTube and search for "Best AI Tools 2026".
      2. Find our video (Channel Name: TechGrowth).
      3. Watch the video for at least 3 minutes (Do not skip).
      4. Like the video and leave a relevant, non-generic comment (at least 10 words).
      5. Subscribe to the channel.
    `,
    proofRequirements: "Please provide a screenshot showing the liked video, your comment, and that you are subscribed. Include your YouTube username in the text box.",
    deadline: "24 hours",
    status: "active"
  };

  const progressPercent = Math.round((job.slotsFilled / job.slotsTotal) * 100);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back button */}
      <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 mb-8">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Jobs
      </Link>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
        {/* Header Section */}
        <div className="border-b border-slate-100 p-6 sm:p-8 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant="info">{job.category}</Badge>
                <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Target: {job.country}
                </span>
                <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Time: {job.deadline}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {job.title}
              </h1>
              <p className="text-sm text-slate-500 flex items-center gap-2">
                Posted by <Link href={`/employers/${job.employer.name}`} className="font-semibold text-emerald-600 hover:underline">{job.employer.name}</Link>
                {job.employer.verified && (
                  <svg className="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </p>
            </div>
            
            <div className="flex flex-col sm:items-end bg-slate-50 p-4 rounded-xl dark:bg-slate-900 shrink-0">
              <div className="text-sm text-slate-500 mb-1 font-medium">Reward</div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">${job.reward.toFixed(2)}</div>
            </div>
          </div>

          <div className="mt-8 bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
            <div className="flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              <span>Slots Available</span>
              <span>{job.slotsTotal - job.slotsFilled} left out of {job.slotsTotal}</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Task Instructions
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {job.instructions.split('\n').map((line, i) => (
                <p key={i} className="text-slate-600 dark:text-slate-300">{line.trim()}</p>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900 rounded-xl p-5">
            <h2 className="text-lg font-bold text-amber-900 dark:text-amber-500 mb-3 flex items-center gap-2">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Proof Requirements
            </h2>
            <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
              {job.proofRequirements}
            </p>
          </div>
        </div>

        {/* Action Section */}
        <div className="bg-slate-50 border-t border-slate-100 p-6 sm:p-8 dark:bg-slate-900/50 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            By accepting, you commit to finishing within {job.deadline}.
          </p>
          <Button size="lg" className="w-full sm:w-auto px-12">
            Accept Task
          </Button>
        </div>
      </div>
    </div>
  );
}
