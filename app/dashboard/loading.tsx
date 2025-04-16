"use client";

import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen px-4 bg-white">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-[#993333] border-t-transparent rounded-full animate-spin sm:w-12 sm:h-12" />
        <p className="text-gray-700 text-base sm:text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
