import React from "react";

export default function RefundPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8">
        Refund Policy
      </h1>
      
      <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
        <p>
          At Ajkerkaj, we strive to ensure a fair and transparent payment ecosystem. This Refund Policy explains how and when refunds are processed.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Unused Deposit Balances</h2>
        <p>
          If you have deposited funds into your employer wallet and have not utilized them for any campaigns, you may request a refund to your original payment method within 7 days of the transaction. A processing fee may apply based on the payment gateway used.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Job Rejections & Escrow</h2>
        <p>
          When you create a campaign, the total amount is held in escrow. If a worker submits invalid or fake proof, you have the right to reject their work. Once rejected, the specific amount for that task is refunded directly back to your deposit balance to be used for another worker.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Non-Refundable Scenarios</h2>
        <p>
          We do not offer refunds for funds that have already been paid out to workers for approved tasks. Additionally, if an account is banned due to a violation of our Terms of Service (e.g., posting malicious links, scamming workers), any remaining balance may be forfeited.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Processing Time</h2>
        <p>
          Approved refund requests to external payment methods generally take 5-10 business days to reflect in your account, depending on your bank or payment provider.
        </p>
      </div>
    </div>
  );
}
