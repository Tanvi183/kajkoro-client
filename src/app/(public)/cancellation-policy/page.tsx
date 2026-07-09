import React from "react";

export default function CancellationPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8">
        Cancellation Policy
      </h1>
      
      <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
        <p>
          This Cancellation Policy governs the rules and procedures for canceling jobs, tasks, and campaigns on the KajKoro platform.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Employer Cancellations</h2>
        <p>
          Employers can cancel a job post at any time before it is approved or if it is currently paused. If a job is canceled, the remaining unspent funds allocated to that specific job will be returned to the employer's deposit balance. Funds already paid out to workers for approved tasks cannot be refunded.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Worker Cancellations</h2>
        <p>
          Workers can abandon or cancel a task they have reserved before the time limit expires. However, frequently reserving and abandoning tasks without completion may result in a temporary suspension or permanent ban from the platform to ensure a fair ecosystem for all users.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. System Auto-Cancellations</h2>
        <p>
          KajKoro reserves the right to automatically cancel campaigns that violate our Terms of Service (e.g., jobs asking for illegal activities, fake reviews, or requiring upfront payment from workers). In such cases, the employer's account may be penalized.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Disputed Tasks</h2>
        <p>
          If an employer Rejects a task, the worker can open a dispute if they believe the rejection was unfair. If our support team finds the employer in violation, the task rejection will be canceled and the worker will be compensated.
        </p>
      </div>
    </div>
  );
}
