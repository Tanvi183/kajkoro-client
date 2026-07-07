import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-md pt-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Reset your password
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      <Card className="w-full">
        <CardContent className="pt-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </div>

            <Button type="button" className="w-full h-11">
              Send reset link
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center border-t border-slate-100 py-6 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <p className="text-sm text-slate-500">
            Remembered your password?{" "}
            <Link href="/auth/login" className="font-semibold leading-6 text-emerald-600 hover:text-emerald-500">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
