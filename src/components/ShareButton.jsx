import React, { useState } from 'react';

const SHARE_URL = 'https://bit.ly/clashroomwaitlist';

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    try {
      // Try to use the Web Share API if available (mobile, some browsers)
      if (navigator.share) {
        await navigator.share({
          title: 'Join the ClashRoom Waitlist!',
          url: SHARE_URL,
        });
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(SHARE_URL);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }
    } catch (err) {
      // Fallback for clipboard error
      setCopied(false);
      alert('Could not share. Please copy the link manually: ' + SHARE_URL);
    }
  };

  return (
    <button
      onClick={share}
      className="mt-2 px-4 py-2 bg-clashBlue text-white rounded font-semibold shadow hover:bg-clashGreen transition-all"
      type="button"
    >
      {copied ? 'Copied!' : 'Share This Link'}
    </button>
  );
};

export default ShareButton;
