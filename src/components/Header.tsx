import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header>
      <div className="mb-4 relative w-[150px] h-[150px] overflow-hidden rounded-full">
        <Image
          src="/profile-image.jpg" // Replace with the actual path to your image
          alt="Oskar Frantti Glen"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2">Oskar Frantti Glen</h1>
      <h2 className="text-xl text-gray-400 mb-4">Full Stack Web Developer</h2>
      <h3 className="text-lg text-gray-400 mb-4">📍 Melbourne 🇦🇺</h3>
      <p className="text-gray-300 text-sm">
        Building Real Products For Real Clients, Not Just More Projects
      </p>
    </header>
  );
};

export default Header;
