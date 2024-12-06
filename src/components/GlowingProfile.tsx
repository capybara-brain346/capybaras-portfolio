"use client";

import React from "react";
import Image from "next/legacy/image";

const GlowingProfile = () => {
  return (
    <div className="relative w-[120px] h-[120px] mb-6">
      {/* Loading animation ring */}
      <div className="absolute -inset-2">
        {/* Rotating gap ring */}
        <div
          className="absolute inset-0 rounded-full 
          before:content-[''] before:absolute before:w-full before:h-full 
          before:rounded-full before:animate-[spin_5s_linear_infinite] 
          before:border-4 before:border-transparent 
          before:border-t-white-400 before:border-l-white-400
          before:shadow-[0_0_15px_rgba(74,222,128,0.5)]"
        />

        {/* Counter-rotating ring */}
        <div
          className="absolute inset-0 rounded-full 
          after:content-[''] after:absolute after:w-[calc(100%-8px)] after:h-[calc(100%-8px)]
          after:top-1 after:left-1 after:rounded-full after:animate-[reverse-spin_3s_linear_infinite]
          after:border-4 after:border-transparent
          after:border-b-white-400 after:border-r-white-400
          after:shadow-[0_0_15px_rgba(74,222,128,0.5)]"
        />
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full animate-pulse bg-green-400/20 blur-sm" />

      {/* Profile picture container */}
      <div className="relative w-full h-full overflow-hidden rounded-full ring-1 ring-green-400/30">
        <Image
          src="/profile_pic.png"
          alt="Piyush Choudhari"
          layout="fill"
          objectFit="cover"
          priority
          className="relative z-10"
        />
      </div>
    </div>
  );
};

export default GlowingProfile;
