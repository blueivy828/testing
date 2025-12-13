"use client";

import React, { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  const charCount = text.length;

  return (
    <div className="bg-white p-6 rounded shadow-sm border border-gray-200 mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Word Counter</h2>
      
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        className="w-full h-32 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-y mb-4"
      />

      <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
        <div className="flex gap-6">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Words</span>
            <span className="text-2xl font-bold text-gray-900">{wordCount}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Characters</span>
            <span className="text-2xl font-bold text-gray-900">{charCount}</span>
          </div>
        </div>

        <button
          onClick={() => setText("")}
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
