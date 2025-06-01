// Testimonials.jsx (Updated for accurate avatar names and titles)
import React, { useEffect, useState } from 'react';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';
import avatar4 from '../assets/avatar4.png';
import avatar5 from '../assets/avatar5.png';
import avatar6 from '../assets/avatar6.png';

const testimonials = [
  {
    quote: "I downloaded ClashRoom as a joke… then got dragged into a debate about student debt and ended up citing sources. It’s weirdly addictive.",
    name: "Leah R.",
    title: "College Debate Captain",
    avatar: avatar1
  },
  {
    quote: "I used to get into arguments on Twitter. Now I get *ranked* for destroying bad takes with facts. It’s like Reddit if Reddit actually made you smarter.",
    name: "Sean B.",
    title: "Debate Enthusiast",
    avatar: avatar2
  },
  {
    quote: "I posted my first ClashClip and some dude tried to roast me—then the AI fact-checker backed *me* up. Felt like I had superpowers.",
    name: "Jasmine Lee",
    title: "Content Creator",
    avatar: avatar3
  },
  {
    quote: "This platform is what the internet was *supposed* to be. People actually bring receipts instead of just vibes.",
    name: "Andre M.",
    title: "Rising Podcaster",
    avatar: avatar4
  },
  {
    quote: "Honestly, I was just tired of scrolling TikTok and feeling dumber. ClashRoom hits different. Still fun, but you actually learn stuff.",
    name: "Maya T.",
    title: "Doomscroller",
    avatar: avatar5
  },
  {
    quote: "It’s the only app that makes me feel smarter instead of angrier.",
    name: "Tom E.",
    title: "Info Nerd",
    avatar: avatar6
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const { quote, name, title, avatar } = testimonials[current];

  return (
    <div className="mt-20 w-full max-w-xl mx-auto px-4 text-center transition-colors duration-500">
      <div className="bg-white dark:bg-clashGray bg-opacity-90 dark:bg-opacity-80 rounded-xl p-6 shadow-lg backdrop-blur-md">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-clashGreen"
        />
        <p className="text-lg sm:text-xl font-medium italic mb-4 text-clashTurquoise transition-all">
          “{quote}”
        </p>
        <div className="text-sm sm:text-base font-semibold">
          — {name}, <span className="font-normal">{title}</span>
        </div>
        <div className="mt-3 flex justify-center space-x-1">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-clashGreen' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
