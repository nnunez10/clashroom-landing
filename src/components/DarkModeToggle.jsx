import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`fixed top-4 right-4 z-50 flex items-center justify-between w-14 h-8 px-1 rounded-full 
                 ${darkMode ? 'bg-clashGreen' : 'bg-clashGray'} transition-colors duration-300`}
      aria-label="Toggle Dark Mode"
    >
      {/* Moon Icon */}
      <svg
        className={`w-5 h-5 transition-opacity duration-300 ${darkMode ? 'opacity-100' : 'opacity-0'}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path d="M21.75 15.5a9.25 9.25 0 01-12.15-12.15A10 10 0 1021.75 15.5z" />
      </svg>

      {/* Sun Icon */}
      <svg
        className={`w-5 h-5 transition-opacity duration-300 ${darkMode ? 'opacity-0' : 'opacity-100'}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-14.5a1 1 0 011 1V6a1 1 0 01-2 0V4.5a1 1 0 011-1zm0 15a1 1 0 011 1V20a1 1 0 01-2 0v-1.5a1 1 0 011-1zM4.5 11a1 1 0 011-1H6a1 1 0 010 2H5.5a1 1 0 01-1-1zm13 0a1 1 0 011-1H20a1 1 0 010 2h-1.5a1 1 0 01-1-1zM6.343 6.343a1 1 0 011.414 0L8.5 7.086a1 1 0 01-1.414 1.414L6.343 7.757a1 1 0 010-1.414zm10.314 10.314a1 1 0 011.414 0l.743.743a1 1 0 01-1.414 1.414l-.743-.743a1 1 0 010-1.414zM6.343 17.657a1 1 0 000 1.414l.743.743a1 1 0 001.414-1.414l-.743-.743a1 1 0 00-1.414 0zm10.314-10.314a1 1 0 010 1.414l-.743.743a1 1 0 01-1.414-1.414l.743-.743a1 1 0 011.414 0z" />
      </svg>
    </button>
  );
};

export default DarkModeToggle;
