import React, { useState } from 'react';

export default function HybridTrapLanding() {
  const [votes, setVotes] = useState({ left: 62, right: 38 });

  const handleVote = (side) => {
    setVotes((prev) => {
      const total = prev.left + prev.right + 1;
      const updated = { ...prev };
      updated[side] += 1;
      const newLeft = Math.round((updated.left / total) * 100);
      const newRight = 100 - newLeft;
      return { left: newLeft, right: newRight };
    });
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-zinc-800">
        <img
          src="/clashroom-logo.png"
          alt="ClashRoom Logo"
          className="h-10"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <a href="/" className="text-teal-400 text-sm hover:underline">
          Refresh
        </a>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-16">
        <h1 className="text-5xl font-extrabold mb-4 text-teal-400">
          See ClashRoom in Action
        </h1>
        <p className="text-lg text-zinc-300 mb-6">
          A taste of what's coming. Watch. Vote. Then join.
        </p>

        {/* Video */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl border border-zinc-700">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/clashroom-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Voting */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={() => handleVote('left')}
            className="px-6 py-2 bg-zinc-800 rounded-full hover:scale-105 transition"
          >
            🔥 Left Side
          </button>
          <button
            onClick={() => handleVote('right')}
            className="px-6 py-2 bg-zinc-800 rounded-full hover:scale-105 transition"
          >
            🧠 Right Side
          </button>
        </div>
        <div className="flex max-w-xl mx-auto mt-4 h-4 bg-zinc-800 rounded-full overflow-hidden">
          <div className="bg-teal-500" style={{ width: `${votes.left}%` }}></div>
          <div className="bg-green-500" style={{ width: `${votes.right}%` }}></div>
        </div>
        <p className="text-sm text-zinc-400 mt-2">Voting is just a demo... for now.</p>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-10 text-center text-zinc-500 text-sm">
        <p className="max-w-2xl mx-auto px-4">
          ClashRoom: Where facts fight back and arguments evolve. Built for thinkers, creators, and rebels.
        </p>
        <p className="mt-2">© 2025 ClashRoom. All rights reserved.</p>
      </footer>
    </div>
  );
}
    