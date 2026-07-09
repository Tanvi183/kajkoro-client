import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About <span className="text-emerald-500">Ajkerkaj</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            We are building the most trusted hybrid marketplace for high-impact micro-jobs. Our mission is to connect skilled professionals with businesses that need real results.
          </p>
        </div>
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900/80 to-slate-900"></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              We believe in creating a fair, transparent, and efficient ecosystem where anyone, anywhere can earn money by leveraging their skills. We provide a platform that guarantees high-quality results for employers and secure, timely payouts for workers.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="/auth/register">
                <Button className="h-12 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                  Join our community
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="rounded-2xl bg-emerald-50 p-6 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">100K+</div>
              <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">Active Workers</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-4xl font-bold text-slate-900 dark:text-white">50K+</div>
              <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">Jobs Completed</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-4xl font-bold text-slate-900 dark:text-white">99%</div>
              <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">Satisfaction Rate</div>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-6 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">24/7</div>
              <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">Support Team</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
