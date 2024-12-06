import React from "react";
// import Image from "next/legacy/image";
import GlowingProfile from "./GlowingProfile";

const Header: React.FC = () => {
  return (
    <header className="bg-black bg-opacity-10 p-8 rounded-3xl border-2 flex flex-col items-center">
      <GlowingProfile />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-2">Piyush Choudhari</h1>
      <h2 className="text-lg sm:text-xl text-gray-400 mb-2">Developer & Data Analyst</h2>
      <h3 className="text-base sm:text-lg text-gray-400">📍 Pune, India 🇮🇳</h3>
    </header>
  );
};

export default Header;
