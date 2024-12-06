import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
// import Experience from '../components/Experience';
import Projects from "../components/Projects";
import SocialLinks from "../components/SocialLinks";
import Education from "../components/Education";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white">
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen">
        <main className="p-6 max-w-screen-sm mx-auto flex-grow">
          <div className="mb-6">
            <Header />
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
          <About />
          <Skills />
          <Education />
          <Projects />
        </main>
        <Footer />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-col xl:flex-row min-h-screen">
        {/* Left Column (Header and Social Links) */}
        <div className="xl:fixed xl:w-2/5 h-screen p-8 xl:p-12 xl:pl-[10%] flex flex-col justify-between min-w-[300px] max-w-[800px]">
          <div>
            <Header />
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
        </div>
        {/* Right Column (Main Content) */}
        <div className="xl:ml-[40%] w-full xl:w-3/5 min-h-screen min-w-[500px] max-w-[1200px] mx-auto flex flex-col">
          <main className="p-8 xl:p-12 xl:pr-[10%] flex-grow">
            <About />
            <Skills />
            <Education />
            <Projects />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
