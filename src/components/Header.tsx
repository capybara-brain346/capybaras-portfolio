import React from "react";
// import Image from "next/legacy/image";
import GlowingProfile from "./GlowingProfile";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 bg-opacity-10 p-8 rounded-lg">
      <GlowingProfile />
      <h1 className="text-4xl font-bold mb-2">Piyush Choudhari</h1>
      <h2 className="text-xl text-gray-400 mb-4">Developer & Data Analyst</h2>
      <h3 className="text-lg text-gray-400 mb-4">📍 Pune, India 🇮🇳</h3>
    </header>
  );
};

export default Header;
