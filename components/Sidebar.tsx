"use client";

import { useAccount } from "wagmi";

export default function Sidebar() {
  const { address, isConnected } = useAccount();

  return (
    <div className="w-64 p-6 border-r border-white/10 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <div className="text-2xl font-bold">m</div>
        <div>Mushee</div>
      </div>

      <button className="bg-white/10 py-2 rounded mb-6">
        + New Flow
      </button>

      <div className="text-sm opacity-60">
        Wallet
        <div className="mt-2 text-xs break-all">
          {isConnected ? address : "Not connected"}
        </div>
      </div>
    </div>
  );
}