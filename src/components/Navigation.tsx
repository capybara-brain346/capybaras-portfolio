import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="space-y-2">
        <li className="bg-white bg-opacity-10 px-4 py-2 rounded-full">About</li>
        <li className="text-gray-400 hover:text-white cursor-pointer">Projects</li>
        <li className="text-gray-400 hover:text-white cursor-pointer">Experience</li>
      </ul>
    </nav>
  );
};

export default Navigation;