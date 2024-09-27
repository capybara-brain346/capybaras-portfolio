import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin, FaFileDownload, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4 items-center">
      <a
        href="/Oskar Frantti Glen Resume.pdf"
        download
        className="flex items-center bg-[#111111] hover:bg-white text-white hover:text-[#111111] px-3 py-1 rounded transition duration-300 mr-4 border border-white"
      >
        <FaFileDownload size={18} className="mr-2" />
        Resume
      </a>
      <a href="https://github.com/OskarFranttiGlen" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <FaGithub size={24} />
      </a>
      <a href="mailto:OskarFranttiGlen@gmail.com" className="text-gray-400 hover:text-white">
        <FaEnvelope size={24} />
      </a>
      <a href="https://www.linkedin.com/in/oskar-frantti-glen-64ba0b1a2/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <FaLinkedin size={24} />
      </a>
      <a href="https://www.instagram.com/OskarFranttiGlen" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <FaInstagram size={24} />
      </a>
      <a href="https://twitter.com/OskarFranttiG" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <FaTwitter size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;