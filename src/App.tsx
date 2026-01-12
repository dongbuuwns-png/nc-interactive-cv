import React, { useState } from "react";
import CombinedTealDarkCVFixed, { CombinedTealDarkCVSidebar } from "./CombinedTealDarkCV";

function App() {
  const [version, setVersion] = useState<"full" | "sidebar">("full");

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 p-4 print:p-0">
      {/* Top controls */}
      <div className="max-w-5xl mx-auto mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between print:hidden">
        <div>
          <h1 className="text-lg font-semibold">Nathan Campbell – CV Preview</h1>
          <p className="text-xs text-slate-400">
            Choose a layout, then use your browser&apos;s Print → Save as PDF.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          <button
            onClick={() => setVersion("full")}
            className={`px-3 py-1 rounded-full border ${
              version === "full"
                ? "border-emerald-400 bg-emerald-400/20"
                : "border-emerald-400/50 bg-transparent"
            }`}
          >
            Full-width version
          </button>

          <button
            onClick={() => setVersion("sidebar")}
            className={`px-3 py-1 rounded-full border ${
              version === "sidebar"
                ? "border-emerald-400 bg-emerald-400/20"
                : "border-emerald-400/50 bg-transparent"
            }`}
          >
            Sidebar version
          </button>

          <button
            onClick={() => window.print()}
            className="px-3 py-1 rounded-full border-0 bg-gradient-to-r from-emerald-400 via-sky-400 to-fuchsia-500 text-slate-900 font-semibold"
          >
            Print / Save as PDF
          </button>
        </div>
      </div>

      {/* CV area */}
      <div className="max-w-5xl mx-auto shadow-2xl rounded-3xl overflow-hidden print:shadow-none print:rounded-none">
        {version === "full" ? (
          <CombinedTealDarkCVFixed />
        ) : (
          <CombinedTealDarkCVSidebar />
        )}
      </div>
    </div>
  );
}

export default App;
