import React from 'react';
import ClashRoomLanding from './ClashRoomLanding'; // moved out of /components
import Testimonials from './components/Testimonials';
import ClashCard from './components/ClashCard';
import ClashLink from './components/ClashLink';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
      <DarkModeToggle />
      <ClashRoomLanding />
      <Testimonials />
      <ClashCard />
      <ClashLink />
    </div>
  );
}

export default App;
