"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function runFlow() {
    if (!prompt) return;

    setLoading(true);

    const res = await fetch("/api/run", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResult(data.output);

    setLoading(false);
  }

  return (
    <div className="min-h-screen text-white flex">
      <Sidebar />

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl mb-6 text-center">
          Ready to Create Something New?
        </h1>

        <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-xl p-4">
          <textarea
            className="w-full bg-transparent outline-none resize-none text-sm"
            placeholder="Draft a grant application, write an email..."
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <div className="flex justify-between items-center mt-4">
            <span className="text-xs opacity-60">
              Cost: $0.001 (USDC)
            </span>

            <button
              onClick={runFlow}
              className="bg-purple-600 px-4 py-2 rounded text-sm"
            >
              {loading ? "Running..." : "Run Flow"}
            </button>
          </div>
        </div>

        {result && (
          <div className="mt-8 w-full max-w-2xl bg-white/5 border border-white/10 p-4 rounded-xl whitespace-pre-wrap text-sm">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
