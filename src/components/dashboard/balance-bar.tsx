import React from "react";

export function BalanceBar() {
  return (
    <div className="bg-[#0b5c3e] text-white py-2 px-4 shadow-sm w-full">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs font-medium sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="text-emerald-100">Pending</span>
          <span className="font-bold">৳0.00</span>
        </div>
        
        <div className="hidden sm:block h-1 w-1 rounded-full bg-emerald-500/50" />
        
        <div className="flex items-center gap-2">
          <span className="text-emerald-100">Earnings</span>
          <span className="font-bold">৳0.00</span>
        </div>
        
        <div className="hidden sm:block h-1 w-1 rounded-full bg-emerald-500/50" />
        
        <div className="flex items-center gap-2">
          <span className="text-emerald-100">Deposited</span>
          <span className="font-bold">৳0.00</span>
        </div>
      </div>
    </div>
  );
}
