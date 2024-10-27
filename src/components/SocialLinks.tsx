// SocialLinks.tsx
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import ResumeButton from "../components/ResumeButton";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-3 items-center">
      <ResumeButton />
      <a
        href="https://github.com/capybara-brain346"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="mailto:choudhari.piyush@gmail.com"
        className="text-gray-400 hover:text-white"
      >
        <FaEnvelope size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/piyush-choudhari/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white"
      >
        <FaLinkedin size={24} />
      </a>

      <a
        href="https://x.com/PiyushChou56092"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white"
      >
        <FaXTwitter size={24} />
      </a>
      <a
        href="https://leetcode.com/u/crinklybrain2003/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white"
      >
        <SiLeetcode size={24} />
      </a>
      <a
        href="https://www.hackerrank.com/profile/choudhari_piyush"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white"
      >
        <FaHackerrank size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;
