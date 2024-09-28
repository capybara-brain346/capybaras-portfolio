import React from 'react';

const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const About: React.FC = () => {
  const birthDate = new Date(2002, 5, 12); // June 12, 2002
  const age = calculateAge(birthDate);

  return (
    <section id="about" className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">About Me</h2>
      <p className="text-gray-300 mb-4">
        I&apos;m a {age}-year-old experienced Full Stack Developer with a knack for building products that make a difference. My expertise spans both frontend and backend technologies, enabling me to craft comprehensive solutions from the ground up.
      </p>
      <p className="text-gray-300 mb-4">
        Throughout my career, I&apos;ve been deeply involved in the startup ecosystem. I&apos;ve worked with various startups, embracing the fast-paced, innovative nature of these environments. This journey led me to found my own startup, where I gained firsthand experience in every aspect of product development and business operations.
      </p>
      <p className="text-gray-300 mb-4">
        During my high school years, I excelled in software development, earning the prestigious title of DUX (top student) in this field. This early achievement laid the foundation for my passion and expertise in programming.
      </p>
      <p className="text-gray-300 mb-6">
        When I&apos;m not immersed in code, you&apos;ll find me experimenting in the kitchen or bringing ideas to life with my 3D printer. I&apos;m always creating, whether it&apos;s digital products or tangible objects.
      </p>
      
    </section>
  );
};

export default About;