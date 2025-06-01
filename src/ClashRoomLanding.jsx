import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import logoLight from './assets/clashroom-logo-light.png';
import logoDark from './assets/clashroom-logo-dark.png';

const ClashRoomLanding = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      quote: "Finally, an app that rewards smart takes, not thirst traps.",
      author: "Jessie C. • Brooklyn",
      emoji: "🧠"
    },
    {
      quote: "It’s like TikTok got its degree and started fact-checking everyone.",
      author: "Marcus D. • ATL",
      emoji: "🎓"
    },
    {
      quote: "ClashRoom makes debates fun *and* useful. What a concept.",
      author: "Rina K. • UCLA",
      emoji: "🔥"
    },
    {
      quote: "Got my whole group chat arguing like it’s First Take.",
      author: "Dev S. • Austin",
      emoji: "🎤"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const SERVICE_ID = 'service_rwu61so';
    const TEMPLATE_ID = 'template_xxxxxxx'; // Replace with actual template ID
    const PUBLIC_KEY = 'your_public_key';   // Replace with your actual public key

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus('Message sent!');
        form.current.reset();
      }, (error) => {
        console.error('FAILED...', error);
        setStatus('Failed to send. Please try again.');
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start text-black dark:text-white px-4 pt-12 transition-colors duration-500 bg-gradient-to-br from-clashGreen via-clashTurquoise to-black dark:from-black dark:via-clashGray dark:to-black bg-[length:400%_400%] animate-gradientShift">
      <div className="mb-6">
        <img
          src={logoLight}
          alt="ClashRoom Logo Light"
          className="w-48 sm:w-64 h-auto block dark:hidden transition-all duration-500 ease-in-out"
        />
        <img
          src={logoDark}
          alt="ClashRoom Logo Dark"
          className="w-48 sm:w-64 h-auto hidden dark:block transition-all duration-500 ease-in-out dark:animate-glow"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2 px-2">
        Social Media's Been Lying to You. <span className="text-clashGreen">Time to Clash.</span>
      </h1>
      <p className="text-center mb-6 max-w-md px-4 text-sm sm:text-base prose prose-invert">
        Smart debates. Real facts. No fluff. Be the first to join the movement.
      </p>

      <section className="w-full max-w-sm space-y-4" aria-label="Waitlist signup form">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 rounded text-black"
          />
          <button
            type="submit"
            className="w-full bg-clashGreen hover:bg-clashTurquoise text-black font-semibold py-2 rounded"
          >
            Join Waitlist
          </button>
        </form>
        {status && <p className="text-sm text-center">{status}</p>}
      </section>

      <section className="mt-12 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">What People Are Saying</h2>
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg transition-all duration-300 min-h-[160px]">
          <p className="text-lg italic mb-2 animate-fadeIn">"{testimonials[current].quote}"</p>
          <p className="text-sm font-semibold text-clashGreen">{testimonials[current].emoji} – {testimonials[current].author}</p>
        </div>
        <div className="mt-2 flex justify-center space-x-1">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-clashGreen' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClashRoomLanding;
