import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-24 sm:py-32 text-center sm:px-6 lg:px-8">
        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-7xl">
          Scale your income with{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-emerald-600">micro-tasks.</span>
            <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-emerald-200/50 dark:bg-emerald-900/50"></span>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          The world's most trusted hybrid marketplace for high-impact micro-jobs.
          Join professionals to start earning today, or hire a crowd to grow your business.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/auth/register?role=worker"
            className="flex items-center gap-2 rounded-lg bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 w-full sm:w-auto justify-center"
          >
            Start Earning
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <Link
            href="/employers"
            className="flex items-center gap-2 rounded-lg bg-slate-900 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 w-full sm:w-auto justify-center border border-slate-700"
          >
            Post a Job
          </Link>
        </div>
        <div className="mt-10 flex items-center justify-center gap-4 text-sm font-medium text-slate-500">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="inline-block h-8 w-8 rounded-full border-2 border-white bg-slate-200 dark:border-slate-900"
              />
            ))}
          </div>
          <p>Joined over <span className="font-bold text-emerald-600">310K+</span> Users</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">How KajKoro Works</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">A seamless process whether you want to earn or hire.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {/* For Workers */}
            <div>
              <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-400 mb-6">
                For Workers
              </div>
              <div className="space-y-8">
                {[
                  { title: "Find a Task", desc: "Browse hundreds of available micro-jobs." },
                  { title: "Complete & Submit", desc: "Follow instructions and submit proof of work." },
                  { title: "Get Paid", desc: "Once approved, withdraw funds to your local wallet." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">{step.title}</h4>
                      <p className="mt-1 text-slate-600 dark:text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Employers */}
            <div>
              <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-800 dark:bg-slate-800 dark:text-slate-300 mb-6">
                For Employers
              </div>
              <div className="space-y-8">
                {[
                  { title: "Deposit Funds", desc: "Add balance to your employer wallet." },
                  { title: "Post Campaign", desc: "Set instructions, slots, and reward per task." },
                  { title: "Review & Approve", desc: "Review submissions and only pay for verified work." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white font-bold dark:bg-slate-800">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">{step.title}</h4>
                      <p className="mt-1 text-slate-600 dark:text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro Works Section */}
      <section className="bg-slate-50 px-4 py-24 dark:bg-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Micro Works
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Industrial-grade verification of all task submissions.
              </p>
            </div>
            <Link
              href="/jobs"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Some Examples
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <svg className="absolute left-3 top-3 h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Filter by project title..."
                className="w-full rounded-md border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
            <select className="w-full sm:w-48 rounded-md border border-slate-300 bg-white py-2.5 pl-3 pr-8 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
              <option>All categories</option>
              <option>Social Media</option>
              <option>Mobile App</option>
              <option>Writing</option>
            </select>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { title: "YouTube SEO & Tags", category: "Social Media", color: "bg-blue-500", done: 21 },
              { title: "Mobile App Install", category: "Mobile App", color: "bg-purple-500", done: 46 },
              { title: "Google Maps Review", category: "Writing", color: "bg-slate-800", done: 1 },
              { title: "Short Consumer Survey", category: "Surveys", color: "bg-orange-500", done: 57 },
              { title: "Beta testing Wallet", category: "Testing", color: "bg-emerald-500", done: 24 },
            ].map((task, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center rounded px-2.5 py-0.5 text-xs font-semibold text-white ${task.color}`}>
                      {task.category}
                    </span>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      {task.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 pr-12">
                    <div className="flex-1">
                      <div className="flex justify-between text-xs font-medium text-slate-500 mb-1">
                        <span>DONE</span>
                        <span className="text-emerald-600">{task.done} / 100</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                        <div className="h-full bg-emerald-500" style={{ width: `${task.done}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 flex justify-end">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "App Testing & Reviews",
                desc: "Real human users will install, test, and provide authentic feedback for your mobile applications.",
                iconBg: "bg-blue-100 dark:bg-blue-900/30",
                iconColor: "text-blue-600 dark:text-blue-400",
              },
              {
                title: "Social Media Growth",
                desc: "Boost your engagement organically with real likes, shares, comments, and authentic followers.",
                iconBg: "bg-rose-100 dark:bg-rose-900/30",
                iconColor: "text-rose-600 dark:text-rose-400",
              },
              {
                title: "Data Entry & Extraction",
                desc: "Highly accurate and rapid data processing, categorization, and web research performed by skilled workers.",
                iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
                iconColor: "text-emerald-600 dark:text-emerald-400",
              },
              {
                title: "SEO Optimization",
                desc: "Improve your search engine rankings through targeted, human-driven search and click campaigns.",
                iconBg: "bg-purple-100 dark:bg-purple-900/30",
                iconColor: "text-purple-600 dark:text-purple-400",
              },
            ].map((service, i) => (
              <div key={i} className="flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition dark:border-slate-800 dark:bg-slate-900">
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.iconBg} ${service.iconColor}`}>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Integrity Section */}
      <section className="bg-slate-900 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Engineering the<br />future of <span className="text-emerald-500">work.</span>
              </h2>
              <dl className="mt-12 space-y-10">
                {[
                  {
                    title: "High velocity verification",
                    desc: "Proprietary validation algorithms process your task submissions in real-time.",
                  },
                  {
                    title: "Institutional security",
                    desc: "Bank-grade encryption protocols and multi-layer fraud protection.",
                  },
                  {
                    title: "Global liquidity",
                    desc: "Instant withdrawals to local gateways with zero settlement delay.",
                  },
                ].map((feature, i) => (
                  <div key={i} className="relative">
                    <dt className="text-lg font-bold text-white">
                      {feature.title}
                    </dt>
                    <dd className="mt-2 text-base text-slate-400">
                      {feature.desc}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            
            <div className="relative rounded-2xl bg-white p-8 shadow-xl dark:bg-slate-800 sm:p-10 border-l-8 border-emerald-500">
              <blockquote className="text-xl font-semibold leading-8 text-slate-900 dark:text-white">
                "The technical precision and payout reliability of KajKoro is unparalleled in the micro-job sector."
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-700" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Sarah Johnson</div>
                  <div className="mt-1 inline-flex items-center rounded-sm bg-emerald-600 px-2 py-0.5 text-xs font-semibold text-white">
                    Worked over 100+ Jobs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
