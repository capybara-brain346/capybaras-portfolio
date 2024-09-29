import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import SocialLinks from '../components/SocialLinks';
import Education from '../components/Education';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/* Mobile Layout */}
      <div className="lg:hidden">
       
        <main className="p-6">
        <div className="mb-6">
          <Header />
          <div className="mt-6">
          <SocialLinks/>
          </div>
        </div>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
        </main>
        <Footer />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        {/* Left Column (Header and Social Links) */}
        <div className="fixed w-2/5 h-screen p-12 pl-[20%] flex flex-col justify-between">
          <div>
            <Header />
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
        </div>
        {/* Right Column (Main Content) */}
        <div className="ml-[40%] w-3/5 min-h-screen">
          <main className="p-12 pr-[20%]">
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}