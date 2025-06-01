import React from 'react';

const ClashCard = () => {
  return (
    <div className="mt-10 p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-md text-center max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">ClashCard™ Preview</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Share your debate stats and flex your facts.</p>
      <div className="border border-clashGreen p-4 rounded-lg bg-gray-100 dark:bg-zinc-700">
        <p className="text-lg font-semibold">Username: @NoeNunez</p>
        <p className="text-sm">Debates Won: 12 • ClashCred: 1472 • Fact Wins: 34</p>
      </div>
      <button className="mt-4 px-4 py-2 bg-clashGreen hover:bg-clashTurquoise text-black font-bold rounded">
        Download ClashCard
      </button>
    </div>
  );
};

export default ClashCard;