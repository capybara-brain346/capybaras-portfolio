// ResumeButton.tsx
"use client";

import React from "react";
import { FaFileDownload } from "react-icons/fa";

const ResumeButton: React.FC = () => {
  return (
    <a
      href="/Piyush Choudhari Resume.pdf"
      download
      className="flex items-center bg-[#111111] hover:bg-white text-white hover:text-[#111111] px-3 py-1 rounded transition duration-300 mr-4 border border-white"
    >
      <FaFileDownload size={18} className="mr-2" />
      Resume
    </a>
  );
};

export default ResumeButton;
