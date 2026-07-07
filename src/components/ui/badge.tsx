import React from "react";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({ className = "", variant = "default", children, ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold";
  
  const variants = {
    default: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300",
    success: "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-400",
    warning: "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-400",
    danger: "bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-400",
    info: "bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
}
