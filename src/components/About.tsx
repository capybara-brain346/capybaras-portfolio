import React from 'react';

const skills = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C#', 'Rust'],
  frameworks: ['ReactJS', 'NextJS', 'Tauri', 'React Native', 'ExpressJS', 'Flask', 'Django', 'ASP.Net'],
  backend: ['Node.js', '.NET', 'REST APIs', 'Microservices'],
  databases: ['Postgres', 'SQL', 'MongoDB', 'Elasticsearch'],
  practices: ['Microservices', 'Microfrontend', 'Agile', 'Git']
};

const Chip: React.FC<{ text: string }> = ({ text }) => (
  <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
    {text}
  </span>
);

const About: React.FC = () => {
  return (
    <section id="about" className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">About Me</h2>
      <p className="text-gray-300 mb-4">
        I&apos;m an experienced Full Stack Developer with a knack for building products that make a difference. My expertise spans both frontend and backend technologies, enabling me to craft comprehensive solutions from the ground up.
      </p>
      <p className="text-gray-300 mb-4">
        Throughout my career, I&apos;ve been deeply involved in the startup ecosystem. I&apos;ve worked with various startups, embracing the fast-paced, innovative nature of these environments. This journey led me to found my own startup, where I gained firsthand experience in every aspect of product development and business operations.
      </p>
      <p className="text-gray-300 mb-6">
        When I&apos;m not immersed in code, you&apos;ll find me experimenting in the kitchen or bringing ideas to life with my 3D printer. I&apos;m always creating, whether it&apos;s digital products or tangible objects.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 text-gray-100">Skills</h3>
      
      <div className="mb-4">
        <h4 className="text-xl font-semibold mb-2 text-gray-200">Languages</h4>
        <div>
          {skills.languages.map((lang, index) => (
            <Chip key={index} text={lang} />
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-xl font-semibold mb-2 text-gray-200">Frameworks</h4>
        <div>
          {skills.frameworks.map((framework, index) => (
            <Chip key={index} text={framework} />
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-xl font-semibold mb-2 text-gray-200">Backend</h4>
        <div>
          {skills.backend.map((tech, index) => (
            <Chip key={index} text={tech} />
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-xl font-semibold mb-2 text-gray-200">Databases</h4>
        <div>
          {skills.databases.map((db, index) => (
            <Chip key={index} text={db} />
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-xl font-semibold mb-2 text-gray-200">Development Practices</h4>
        <div>
          {skills.practices.map((practice, index) => (
            <Chip key={index} text={practice} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;