import React from "react";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8">
        Terms and Conditions
      </h1>
      
      <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
        <p>
          Welcome to KajKoro! By accessing or using our platform, you agree to comply with and be bound by the following Terms and Conditions.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Account Rules</h2>
        <p>
          Users are permitted to maintain only ONE account per person and per IP address. Creating multiple accounts, using VPNs, proxies, or sharing accounts is strictly prohibited and will result in a permanent ban.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Worker Obligations</h2>
        <p>
          Workers must complete tasks honestly and provide valid proof as requested by the employer. Submitting fake, repetitive, or irrelevant proof will lead to job rejections and a lower success rate, which may eventually result in an account suspension.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Employer Obligations</h2>
        <p>
          Employers must provide clear and concise instructions for their campaigns. It is strictly forbidden to request workers to perform illegal acts, visit malicious sites, or pay any upfront fees. Employers must review submitted tasks fairly and promptly.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Platform Fees</h2>
        <p>
          KajKoro charges a nominal fee on withdrawals and deposits to cover operational and payment gateway costs. Specific fee structures are displayed during the respective transaction processes.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">5. Termination</h2>
        <p>
          We reserve the right to suspend or terminate any account at our discretion, without prior notice, if we detect fraudulent activities, spam, or violations of these Terms and Conditions.
        </p>
      </div>
    </div>
  );
}
