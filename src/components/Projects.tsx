import React from "react";
import Image from "next/legacy/image";
import { FaGithub } from "react-icons/fa";
import { ChipList } from "./Chips";

interface Project {
  name: string;
  description: string[];
  technologies: string[];
  image: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    name: "Mars Weather Data ETL Pipeline",
    description: [
      "An automated ETL pipeline that extracts Mars weather data from NASA's InSight API, transforms it using Java, and loads it into MongoDB for analysis. Features Apache Airflow for workflow orchestration and Docker for containerization. ☄️",
    ],
    technologies: [
      "Java",
      "MongoDB",
      "MySQL",
      "JDBC",
      "Apache Airflow",
      "Dockers",
    ],
    image: "/MarsETL.png",
    githubLink: "https://github.com/capybara-brain346/Mars-Data-ETL-Pipeline",
  },
  {
    name: "RecycleNet18",
    description: [
      "RecycleNet is a deep learning-based project designed to classify images of recyclable items into 30 distinct categories. 📦",
    ],
    technologies: ["Python", "Streamlit", "Pytorch", "Ollama", "Langchain"],
    image: "/recyclenet.png",
    githubLink: "https://github.com/capybara-brain346/RecycleNet18",
  },
  {
    name: "pokedex-api",
    description: [
      "Retrieve comprehensive data on your favorite Pokémon with this Restful API. 🌟 ",
    ],
    technologies: ["Python", "FastAPI", "Sqlite3", "Pytest"],
    image: "/pokemon.jpg",
    githubLink: "https://github.com/capybara-brain346/pokedex-api",
  },
  {
    name: "SAP Stocks",
    description: [
      "This application provides real-time insights into stock performance, company news, and market trends through an intuitive interface and AI-powered chatbot. ⚙️",
    ],
    technologies: ["Python", "React", "Flask", "Langchain", "Ollama"],
    image: "/sap_stocks.png",
    githubLink: "https://github.com/capybara-brain346/SAP-Stocks",
  },
  {
    name: "AI Based Resume Screener",
    description: [
      "An AI-powered resume screener built using Python, React, Flask, Langchain, ChromaDB, and the Gemini API. 🤖 ",
    ],
    technologies: ["Python", "React", "Flask", "Langchain"],
    image: "/resume-screener.jpg",
    githubLink: "https://github.com/capybara-brain346/resume-screener-ai",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">Projects</h2>
      <ul className="space-y-12">
        {projects.map((project, index) => (
          <li
            key={index}
            className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600"
          >
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
                <h3 className="text-2xl font-semibold mb-3 text-gray-100">
                  {project.name}
                </h3>
                <ul className="space-y-2 text-gray-300 mb-4">
                  {project.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="mr-2 mt-1.5 text-gray-500">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <ChipList items={project.technologies} category="frameworks" />
                <div className="flex space-x-4 mt-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <FaGithub className="mr-2" />
                      <span>View Code</span>
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
