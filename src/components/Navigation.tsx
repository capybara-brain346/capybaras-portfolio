import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="flex space-x-4 items-center">
      <Link href="#about" className="text-gray-400 hover:text-white">About</Link>
      <Link href="#skills" className="text-gray-400 hover:text-white">Skills</Link>
      <Link href="#experience" className="text-gray-400 hover:text-white">Experience</Link>
      <Link href="#education" className="text-gray-400 hover:text-white">Education</Link>
      <Link href="#projects" className="text-gray-400 hover:text-white">Projects</Link>
    </nav>
  );
};

export default Navigation;