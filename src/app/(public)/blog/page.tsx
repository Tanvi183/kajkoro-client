import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const BLOG_POSTS = [
  {
    id: 1,
    title: "How to maximize your earnings on Ajkerkaj",
    excerpt: "Discover the top strategies used by our most successful workers to increase their daily task completion rate and boost income.",
    category: "Tips & Tricks",
    date: "Jul 10, 2026",
    readTime: "5 min read",
    imageColor: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Digital Marketing Gigs",
    excerpt: "Learn how to provide high-quality social media engagement, reviews, and SEO tasks that employers love.",
    category: "Guides",
    date: "Jul 05, 2026",
    readTime: "8 min read",
    imageColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    id: 3,
    title: "Why Employers Choose Ajkerkaj for Campaign Growth",
    excerpt: "An inside look at how our platform guarantees authentic engagement and real results for advertisers worldwide.",
    category: "Platform News",
    date: "Jun 28, 2026",
    readTime: "4 min read",
    imageColor: "bg-purple-100 dark:bg-purple-900/30",
  }
];

export default function BlogPage() {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Ajkerkaj <span className="text-emerald-600">Blog</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Insights, guides, and news to help you succeed in the gig economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full">
                {/* Image Placeholder */}
                <div className={`w-full h-48 rounded-xl ${post.imageColor} mb-6 flex items-center justify-center`}>
                  <svg className="h-12 w-12 text-slate-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-slate-500">
                    {post.date}
                  </time>
                  <Badge variant="outline" className="rounded-full bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700">
                    {post.category}
                  </Badge>
                </div>
                
                <div className="group relative">
                  <h3 className="mt-4 text-xl font-bold leading-6 text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-between w-full border-t border-slate-100 dark:border-slate-800 pt-4">
                <span className="text-sm font-semibold text-emerald-600 hover:text-emerald-500 cursor-pointer flex items-center gap-1">
                  Read article
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="text-xs text-slate-500">{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
