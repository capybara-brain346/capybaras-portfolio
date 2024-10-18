import React from "react";
import Image from "next/legacy/image";

const Header: React.FC = () => {
  return (
    <header>
      <div className="mb-4 relative w-[150px] h-[150px] overflow-hidden rounded-full">
        <Image
          src="/linkedIn_profile_pic (2).png" // Replace with the actual path to your image
          alt="Piyush Choudhari"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2">Piyush Choudhari</h1>
      <h2 className="text-xl text-gray-400 mb-4">Developer & Data Analyst</h2>
      <h3 className="text-lg text-gray-400 mb-4">📍 Pune, India 🇮🇳</h3>
    </header>
  );
};

export default Header;
