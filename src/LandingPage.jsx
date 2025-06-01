import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function LandingPage() {
  return (
    <div className="bg-black text-white font-['Inter'] min-h-screen overflow-x-hidden">
      {/* HEADER WITH LOGO */}
      <header className="flex items-center justify-between px-6 py-4 bg-zinc-900 border-b border-zinc-800">
        <img src="/clashroom-logo.png" alt="ClashRoom Logo" className="h-10 w-auto" />
        <a href="#early-access" className="text-sm text-teal-400 hover:underline font-bold tracking-wide">Join Early Access</a>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <video className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-0" autoPlay muted loop>
          <source src="/bg-motion.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-['Orbitron'] font-extrabold mb-4 tracking-tight">
            <Typewriter
              words={['Where Arguments Evolve']}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={60}
            />
            <br />
            <span className="text-gradient bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Clash is the future.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-xl mb-8 mt-4 font-['Inter']">
            The only app where facts fight back. Built for creators, critics, and culture warriors.
          </p>
          <a href="#early-access" className="bg-gradient-to-r from-green-500 to-teal-500 hover:scale-105 hover:shadow-xl transition px-8 py-4 rounded-2xl text-lg font-semibold font-['Inter']">Claim Early Access</a>
        </div>
      </section>
    </div>
  );
}
