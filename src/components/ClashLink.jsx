// ClashLink.jsx
import React, { useState } from 'react';

const ClashLink = () => {
  const [link, setLink] = useState('https://clashroom.app/invite?ref=knox');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const shareText = encodeURIComponent("🔥 Join the smart side of social. I’m using ClashRoom to debate with receipts.");
  const encodedLink = encodeURIComponent(link);

  return (
    <div className="mt-16 max-w-xl mx-auto px-4 text-center">
      <h3 className="text-2xl font-bold mb-2">Your ClashLink™</h3>
      <p className="text-sm mb-4 text-gray-500 dark:text-gray-300">
        Invite your crew to the next big platform.
      </p>

      <div className="bg-gray-100 dark:bg-zinc-800 rounded-lg px-4 py-3 flex items-center justify-between shadow-sm">
        <input
          type="text"
          readOnly
          value={link}
          className="bg-transparent text-sm sm:text-base w-full mr-2 text-black dark:text-white outline-none"
        />
        <button
          onClick={copyToClipboard}
          className="bg-clashGreen hover:bg-clashTurquoise text-black px-3 py-1 text-sm rounded"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-4">
        {/* Twitter */}
        <a
          href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodedLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Share on X
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded"
        >
          Share on Facebook
        </a>
      </div>
    </div>
  );
};

export default ClashLink;
