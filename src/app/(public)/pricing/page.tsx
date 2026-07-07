import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Transparent pricing for everyone.
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Whether you're earning or hiring, our fee structure is built to be fair and transparent. No hidden charges.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Worker Pricing */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">For Workers</h2>
              <p className="text-sm text-slate-500">100% Free to join and earn.</p>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$0</span>
              <span className="text-slate-500 font-medium">/ month</span>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {[
              "Browse and accept unlimited jobs",
              "No application fees or bidding costs",
              "Standard 5% withdrawal fee",
              "Withdrawals processed in 24-48 hours",
              "Minimum withdrawal: $5.00"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <svg className="h-5 w-5 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          
          <Link href="/auth/register?role=worker" className="block w-full">
            <Button variant="outline" className="w-full">Create Worker Account</Button>
          </Link>
        </div>

        {/* Employer Pricing */}
        <div className="rounded-2xl border-2 border-emerald-500 bg-white p-8 shadow-md relative dark:bg-slate-950">
          <div className="absolute -top-4 right-8 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider">
            Most Popular
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">For Employers</h2>
              <p className="text-sm text-slate-500">Pay only for approved work.</p>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">10%</span>
              <span className="text-slate-500 font-medium">campaign fee</span>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {[
              "10% fee added to total campaign cost",
              "e.g. $100 in rewards = $110 total",
              "Unused funds are returned to your wallet",
              "Advanced geo-targeting included",
              "Priority support for bulk campaigns"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <svg className="h-5 w-5 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          
          <Link href="/auth/register?role=employer" className="block w-full">
            <Button className="w-full">Post Your First Job</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
