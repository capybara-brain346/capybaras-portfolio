// SocialLinks.tsx
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import ResumeButton from "../components/ResumeButton";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-4 sm:space-x-4 border-2 bg-gray-100 bg-opacity-10 p-2 sm:p-4 rounded-xl overflow-x-auto">
      <ResumeButton />
      <div className="group relative">
        <a
          href="https://github.com/capybara-brain346"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
        >
          <FaGithub size={20} />
          <span
            className="absolute -top-10 left-1/2 -translate-x-1/2 
            hidden group-hover:block bg-gray-800 text-white text-sm 
            rounded-md px-2 py-1 whitespace-nowrap"
          >
            GitHub
          </span>
        </a>
      </div>

      <div className="group relative">
        <a
          href="mailto:choudhari.piyush@gmail.com"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
        >
          <FaEnvelope size={20} />
          <span
            className="absolute -top-10 left-1/2 -translate-x-1/2 
            hidden group-hover:block bg-gray-800 text-white text-sm 
            rounded-md px-2 py-1 whitespace-nowrap"
          >
            Email
          </span>
        </a>
      </div>

      <div className="group relative">
        <a
          href="https://www.linkedin.com/in/piyush-choudhari/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
        >
          <FaLinkedin size={20} />
          <span
            className="absolute -top-10 left-1/2 -translate-x-1/2 
            hidden group-hover:block bg-gray-800 text-white text-sm 
            rounded-md px-2 py-1 whitespace-nowrap"
          >
            LinkedIn
          </span>
        </a>
      </div>

      <div className="group relative">
        <a
          href="https://x.com/PiyushChou56092"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
        >
          <FaXTwitter size={20} />
          <span
            className="absolute -top-10 left-1/2 -translate-x-1/2 
            hidden group-hover:block bg-gray-800 text-white text-sm 
            rounded-md px-2 py-1 whitespace-nowrap"
          >
            X (Twitter)
          </span>
        </a>
      </div>

      <div className="group relative">
        <a
          href="https://leetcode.com/u/crinklybrain2003/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
        >
          <SiLeetcode size={20} />
          <span
            className="absolute -top-10 left-1/2 -translate-x-1/2 
            hidden group-hover:block bg-gray-800 text-white text-sm 
            rounded-md px-2 py-1 whitespace-nowrap"
          >
            LeetCode
          </span>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
