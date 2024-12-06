// SocialLinks.tsx
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import ResumeButton from "../components/ResumeButton";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-4 sm:space-x-4 border-2 bg-black bg-opacity-10 p-2 sm:p-4 rounded-xl overflow-x-auto shadow-lg transition-shadow hover:shadow-2xl">
      <ResumeButton />
      <div className="group relative">
        <a
          href="https://github.com/capybara-brain346"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-125 hover:rotate-12"
        >
          <FaGithub size={24} />
        </a>
      </div>

      <div className="group relative">
        <a
          href="mailto:choudhari.piyush@gmail.com"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-125 hover:rotate-12"
        >
          <FaEnvelope size={24} />
        </a>
      </div>

      <div className="group relative">
        <a
          href="https://x.com/piyush_yip"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-125 hover:rotate-12"
        >
          <FaXTwitter size={24} />
        </a>
      </div>
      <div className="group relative">
        <a
          href="https://www.linkedin.com/in/piyush-choudhari/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-125 hover:rotate-12"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <div className="group relative">
        <a
          href="https://leetcode.com/u/crinklybrain2003/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-125 hover:rotate-12"
        >
          <SiLeetcode size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
