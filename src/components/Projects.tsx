import React from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  name: string;
  description: string[];
  technologies: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    name: "Shifti: Workforce Management Software",
    description: [
      "Architected a comprehensive workforce management solution using NextJS for web and React Native for mobile platforms",
      "Implemented complex scheduling algorithms and an award interpretation engine for labor regulation compliance",
      "Developed API integrations with HR and payroll systems, enabling seamless data flow and reducing manual entry"
    ],
    technologies: ["NextJS", "Supabase", "React Native", "Expo"],
    image: "/shifti-project.jpg",
    githubLink: "https://github.com/yourusername/shifti",
    liveLink: "https://shifti-demo.com"
  },
  {
    name: "HomeGame: Home Poker Analytics Manager",
    description: [
      "Developed a feature-rich mobile application for managing and analyzing home poker games using React Native and Supabase",
      "Created an advanced analytics engine providing insights into gameplay, win rates, and improvement areas",
      "Implemented offline mode with data synchronization and integrated third-party APIs for odds calculation"
    ],
    technologies: ["Supabase", "React Native", "Expo"],
    image: "/homegame-project.jpg",
    githubLink: "https://github.com/yourusername/homegame",
    liveLink: "https://homegame-app.com"
  },
  {
    name: "Cafe Loyalty App",
    description: [
      "Developed a full-stack loyalty app solution for independent cafes, featuring React Native mobile apps, Node.js backend with GraphQL API, and MongoDB database",
      "Integrated with various Point of Sale (POS) systems using a flexible adapter pattern",
      "Implemented real-time order tracking and notifications using Socket.io",
      "Designed a customizable loyalty program system with analytics dashboard for cafe owners"
    ],
    technologies: ["React Native", "Expo", "Node.js", "GraphQL", "MongoDB"],
    image: "/cafe-loyalty-project.jpg",
    githubLink: "https://github.com/yourusername/cafe-loyalty",
    liveLink: "https://cafeloyalty-demo.com"
  },
  {
    name: "Quantum-Resistant Password Manager",
    description: [
      "Developed a high-performance, cryptographically secure password manager using Rust and post-quantum algorithms",
      "Designed a zero-knowledge architecture, enhancing user privacy and security",
      "Utilized efficient data structures (B-trees) for optimized password storage and retrieval",
      "Implemented advanced features including 2FA, secure password sharing, and encrypted backups"
    ],
    technologies: ["Rust", "Post-Quantum Cryptography"],
    image: "/password-manager-project.jpg",
    githubLink: "https://github.com/yourusername/quantum-pass",
    liveLink: "https://quantum-pass-demo.com"
  },
  {
    name: "InvoiceNinja: Freelancer Invoicing App",
    description: [
      "Developed a user-friendly invoicing application tailored for freelancers",
      "Implemented features such as invoice generation, expense tracking, and client management",
      "Integrated payment gateways for seamless online payments",
      "Created insightful financial reports and dashboards for business analysis"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    image: "/invoice-ninja-project.jpg",
    githubLink: "https://github.com/yourusername/invoice-ninja",
    liveLink: "https://invoice-ninja-demo.com"
  },
  {
    name: "FitQuest: Interactive Workout Companion",
    description: [
      "Built a gamified workout application to make fitness routines more engaging",
      "Designed personalized workout plans based on user goals and fitness levels",
      "Implemented progress tracking and achievement system to boost user motivation",
      "Integrated with wearable devices for real-time workout data synchronization"
    ],
    technologies: ["React Native", "Firebase", "TensorFlow.js"],
    image: "/fitquest-project.jpg",
    githubLink: "https://github.com/yourusername/fitquest",
    liveLink: "https://fitquest-demo.com"
  },
  {
    name: "StudyBuddy: Assignment Planner & Prior Learning Tracker",
    description: [
      "Created a comprehensive study management tool for students",
      "Developed features for assignment planning, deadline tracking, and study session scheduling",
      "Implemented a prior learning section to track and review previously learned material",
      "Integrated with popular calendar apps for seamless schedule syncing"
    ],
    technologies: ["Vue.js", "Express.js", "PostgreSQL"],
    image: "/studybuddy-project.jpg",
    githubLink: "https://github.com/yourusername/studybuddy",
    liveLink: "https://studybuddy-demo.com"
  },
  {
    name: "Collectify: Personal Collections Manager",
    description: [
      "Developed a versatile app for creating and managing personal collections",
      "Implemented features for adding, categorizing, and tagging items within collections",
      "Created a search and filter system for easy navigation of large collections",
      "Designed a user-friendly interface for seamless collection management"
    ],
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    image: "/collectify-project.jpg",
    githubLink: "https://github.com/yourusername/collectify",
    liveLink: "https://collectify-demo.com"
  },
  {
    name: "ShowTrackr: TV & Movie Release Tracker",
    description: [
      "Built an application to track new releases of TV shows and movies",
      "Integrated with popular media databases to fetch accurate and up-to-date information",
      "Implemented personalized watchlists and notifications for upcoming releases",
      "Created a recommendation system based on user preferences and viewing history"
    ],
    technologies: ["Angular", "NestJS", "PostgreSQL", "TMDb API"],
    image: "/showtrackr-project.jpg",
    githubLink: "https://github.com/yourusername/showtrackr",
    liveLink: "https://showtrackr-demo.com"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">Projects</h2>
      <ul className="space-y-12">
        {projects.map((project, index) => (
          <li key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  width={300} 
                  height={200} 
                  className="rounded-lg object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3 text-gray-100">{project.name}</h3>
                <ul className="space-y-2 text-gray-300 mb-4">
                  {project.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="mr-2 mt-1.5 text-gray-500">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                      <FaGithub className="mr-2" />
                      <span>View Code</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                      <FaExternalLinkAlt className="mr-2" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;