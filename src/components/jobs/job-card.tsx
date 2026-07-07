import React from "react";
import Link from "next/link";
import { Badge } from "../ui/badge";

export interface JobCardProps {
  id: string;
  title: string;
  category: string;
  reward: number;
  slotsFilled: number;
  slotsTotal: number;
  country?: string;
  href?: string;
}

export function JobCard({
  id,
  title,
  category,
  reward,
  slotsFilled,
  slotsTotal,
  country = "Global",
  href,
}: JobCardProps) {
  const progressPercent = Math.min(100, Math.round((slotsFilled / slotsTotal) * 100));
  const cardHref = href || `/jobs/${id}`;
  
  // Semantic color selection for categories
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "social media": return "info";
      case "mobile app": return "warning";
      case "surveys": return "danger";
      case "testing": return "success";
      default: return "default";
    }
  };

  return (
    <Link href={cardHref} className="block group">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-emerald-200 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-emerald-900/50">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={getCategoryColor(category)}>{category}</Badge>
            {country && (
              <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {country}
              </span>
            )}
          </div>
          
          <div className="flex items-start justify-between gap-4 pr-0 sm:pr-8">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
              {title}
            </h3>
            <div className="text-right">
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                ${reward.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 pr-0 sm:pr-8">
            <div className="flex-1">
              <div className="flex justify-between text-xs font-medium text-slate-500 mb-1.5">
                <span>DONE</span>
                <span className="text-slate-900 dark:text-slate-300 font-semibold">{slotsFilled} / {slotsTotal}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${progressPercent}%` }} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 sm:mt-0 flex justify-end shrink-0 pl-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors dark:bg-slate-900 dark:text-slate-500">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
