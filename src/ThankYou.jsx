import React from 'react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  const shareText = encodeURIComponent(
    "I just joined @ClashRoomApp — the only app where facts fight back. Built for creators, critics & culture warriors. Smart is the new viral. #ClashRoom"
  );

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="animate-bounce mb-8">
        <img
          src="/clashroom-logo.png"
          alt="ClashRoom Logo"
          className="h-20 drop-shadow-lg"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-teal-400">
        You’re in. ClashCred unlocked.
      </h1>

      <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-xl">
        You just joined the smartest revolution on the internet. When the beta drops, you’ll be first in line to roast, rethink, and fact-check like a legend.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {/* X (Twitter) */}
        <a
          href={`https://twitter.com/intent/tweet?text=${shareText}&url=https://clashroom.app?utm_source=x&utm_medium=social&utm_campaign=thank_you`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-slate-800 to-slate-600 px-5 py-3 rounded-full font-bold hover:scale-105 transition"
        >
          Share on X
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=https://clashroom.app?utm_source=facebook&utm_medium=social&utm_campaign=thank_you&quote=${shareText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-600 to-blue-400 px-5 py-3 rounded-full font-bold hover:scale-105 transition"
        >
          Share on Facebook
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/clashroomapp?utm_source=instagram&utm_medium=social&utm_campaign=thank_you"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 px-5 py-3 rounded-full font-bold hover:scale-105 transition"
        >
          Tag us on Instagram
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@clashroomapp?utm_source=tiktok&utm_medium=social&utm_campaign=thank_you"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-black to-gray-800 px-5 py-3 rounded-full font-bold hover:scale-105 transition"
        >
          Tag us on TikTok
        </a>

        {/* Copy Link */}
        <button
          onClick={() => {
            navigator.clipboard.writeText(
              "https://clashroom.app?utm_source=direct&utm_medium=copy&utm_campaign=thank_you"
            );
            alert("Link copied to clipboard!");
          }}
          className="bg-gradient-to-r from-green-500 to-teal-500 px-5 py-3 rounded-full font-bold hover:scale-105 transition"
        >
          Copy Link
        </button>
      </div>

      <Link
        to="/"
        className="text-teal-400 hover:underline text-sm"
      >
        ← Return to Homepage
      </Link>
    </div>
  );
}
