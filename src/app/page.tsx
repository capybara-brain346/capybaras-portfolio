import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import SocialLinks from '../components/SocialLinks';
import Education from '../components/Education';

export default function Home() {
  return (
    <div className="flex flex-col 2xl:flex-row min-h-screen bg-[#111111] text-white">
      {/* Left Column (Header and Social Links) */}
      <div className="2xl:fixed 2xl:w-2/5 w-full p-6 2xl:p-12 2xl:pl-[20%] flex flex-col justify-between">
        <div>
          <Header />
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Right Column (Main Content) */}
      <div className="2xl:ml-[40%] 2xl:w-3/5 w-full min-h-screen">
        <main className="p-6 2xl:p-12 2xl:pr-[20%]">
          <About />
          <Experience />
          <Education />
          <Projects />
        </main>
      </div>
    </div>
  );
}