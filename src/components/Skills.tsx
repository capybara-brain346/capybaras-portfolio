import React from 'react';
import { ChipList, SkillCategory } from './Chips';

const skills: { [key in SkillCategory]: string[] } = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C#', 'Rust'],
  frameworks: ['ReactJS', 'NextJS', 'Tauri', 'React Native', 'ExpressJS', 'Flask', 'Django', 'ASP.Net'],
  backend: ['Node.js', '.NET', 'REST APIs', 'Microservices'],
  databases: ['Postgres', 'SQL', 'MongoDB', 'Elasticsearch'],
  practices: ['Microservices', 'Microfrontend', 'Agile', 'Git']
};

const Skills: React.FC = () => {
  return (
    <div>
       <h2 className="text-3xl font-bold mb-6 text-gray-100">Skills</h2>
      
      {(Object.entries(skills) as [SkillCategory, string[]][]).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h4 className="text-xl font-semibold mb-2 text-gray-200 capitalize">{category}</h4>
          <ChipList items={items} category={category} />
        </div>
      ))}
    </div>
  );
};

export default Skills;
