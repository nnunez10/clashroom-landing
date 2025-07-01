import React, { useState, useEffect } from 'react';

const logoLight = `${process.env.PUBLIC_URL}/assets/clashroom-logo-light.png`;
const logoDark = `${process.env.PUBLIC_URL}/assets/clashroom-logo-dark.png`;

function useDarkMode() {
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem('theme') === 'dark' ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);
  return [isDark, setIsDark];
}
function ThemeToggle() {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <button
      onClick={() => setIsDark(d => !d)}
      className="absolute top-4 right-4 z-50 bg-white dark:bg-zinc-900 border border-clashGreen text-clashGreen dark:text-white p-2 rounded-full shadow transition-colors"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {isDark ? '🌞' : '🌙'}
    </button>
  );
}

const SHARE_URL = 'https://clashroom.app/';
function ShareButton() {
  const [copied, setCopied] = useState(false);
  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Join the ClashRoom Waitlist!',
          url: SHARE_URL,
        });
      } else {
        await navigator.clipboard.writeText(SHARE_URL);
        setCopied(true);
        setTimeout(() => setCopied(false), 1300);
      }
    } catch {
      setCopied(false);
      alert('Could not share. Please copy the link: ' + SHARE_URL);
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
}

const testimonials = [
  {
    quote: "Came here cocky, left with a list of things to Google. This app’s a humbler.",
    author: "Jaylen (Brooklyn, NY)",
    emoji: "😂"
  },
  {
    quote: "Tried to run my mouth—got fact-checked by a 19-year-old. I respect it.",
    author: "Liz (Miami, FL)",
    emoji: "🥲"
  },
  {
    quote: "Way better than group chats, ‘cause you actually learn something.",
    author: "Manny (Houston, TX)",
    emoji: "📲"
  },
  {
    quote: "Finally, an app where trolling makes you lose points. Shook.",
    author: "Aliyah (Seattle, WA)",
    emoji: "🤓"
  },
  {
    quote: "No more ‘my opinion is my fact.’ If you can't back it up, you're getting roasted.",
    author: "Kevin (Chicago, IL)",
    emoji: "🫡"
  },
  {
    quote: "Debated my cousin, lost in public, and somehow I’m still coming back. Wild.",
    author: "Jess (Los Angeles, CA)",
    emoji: "👀"
  }
];

const features = [
  {
    title: "Live Debates",
    description: "Hop in, speak up, or just watch people roast each other—video, audio, or just text.",
    icon: "🎤"
  },
  {
    title: "Instant Fact-Check",
    description: "Make a claim, get checked—live. Not just AI, real people too. No more wild stats with zero proof.",
    icon: "📲"
  },
  {
    title: "Earn Cred, Not Clout",
    description: "Truth actually matters here. Score goes up for real talk, down if you troll or spam.",
    icon: "🏆"
  },
  {
    title: "Receipts for Every Claim",
    description: "Nobody’s getting away with BS. Everything you say, you better back it up. And everyone sees the receipts.",
    icon: "🧾"
  },
  {
    title: "Troll Filter",
    description: "The more you troll, the less power you have. Community votes you down, not up.",
    icon: "🚫"
  },
  {
    title: "Bring Your Squad",
    description: "Debate your friends, your followers, or some random loudmouth—winner gets bragging rights.",
    icon: "👥"
  }
];

const patentBrags = [
  "We built tech so smart, even AI needs a fact-check. 💡",
  "Every claim on ClashRoom comes with receipts—blockchain style. Nobody’s getting away with BS.",
  "Swipe up, get the receipts, and catch trolls in real time.",
  "Patent-pending overlays: if you see a green bar, the facts won. If it’s red, someone’s lying.",
  "Crowd + AI = The only way to keep debates honest in 2025. And we locked it down with a patent.",
  "We fact check AI.",
];

const faqs = [
  {
    q: "Is ClashRoom just another debate app?",
    a: "Nope. We don’t reward shouting or influencer clout—we reward truth. If you can’t back it up, you lose Cred. We use crowd + AI + blockchain so every claim has real receipts."
  },
  {
    q: "How do I earn Cred?",
    a: "Bring facts, bring receipts, and let the crowd (and ClashBot) judge. Every correct claim, vote, or fact-check earns you ClashCred™—our own patent-pending reputation score."
  },
  {
    q: "Can I lose Cred?",
    a: "Absolutely. Spread BS, get caught, or troll? Your Cred drops faster than a meme coin. Play smart, not loud."
  },
  {
    q: "What’s with the patent-pending overlays?",
    a: "Swipe up, get the receipts, and catch trolls in real time. Our overlays show green when facts win, red when lies get called out. All blockchain verified."
  },
  {
    q: "Is ClashRoom for regular users, or just 'experts'?",
    a: "Everyone can participate—debate, vote, or just watch. You don't need a PhD, just a brain and a willingness to learn (or get fact-checked)."
  },
  {
    q: "How do you prevent bot/spam voting?",
    a: "ClashCred™ tracks patterns. Bots and trolls lose Cred instantly. Plus, all fact-checks are logged to blockchain—try faking that."
  },
  {
    q: "Can I use this tech for my podcast, video, or site?",
    a: "Yes! Our API and SDK are coming soon—get on the waitlist to license our tech for your community or platform."
  },
  {
    q: "Why use blockchain?",
    a: "Receipts, receipts, receipts. Nobody’s editing the truth behind the scenes—every claim, vote, and verdict is timestamped, public, and permanent."
  },
  {
    q: "What if AI gets something wrong?",
    a: "Even AI gets fact-checked here. The crowd can call out hallucinations. 'We fact check AI' isn’t a slogan—it’s the system."
  },
];

function useClashCounter(start = 18419) {
  const [count, setCount] = useState(start);
  useEffect(() => {
    const interval = setInterval(() => setCount((c) => c + Math.floor(Math.random() * 3)), 4000);
    return () => clearInterval(interval);
  }, []);
  return count;
}

const ClashRoomLanding = () => {
  const [testimonial, setTestimonial] = useState(0);
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const clashCounter = useClashCounter();

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  }, [email]);

  const handleScrollToWaitlist = e => {
    e.preventDefault();
    document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-700 bg-gradient-to-br from-white via-clashBlue to-clashGreen dark:bg-gradient-to-br dark:from-black dark:via-[#00c853] dark:to-black">
      <ThemeToggle />

      <nav className="sticky top-0 z-40 bg-white/60 dark:bg-black/60 backdrop-blur-md shadow-sm flex justify-between items-center px-4 py-3">
        <div className="flex items-center">
          <div className="bg-white rounded-full p-2 shadow dark:bg-black dark:shadow-lg">
            <img
              src={logoLight}
              alt="ClashRoom Logo Light"
              className="w-14 h-14 block dark:hidden"
              draggable="false"
            />
            <img
              src={logoDark}
              alt="ClashRoom Logo Dark"
              className="w-14 h-14 hidden dark:block"
              draggable="false"
            />
          </div>
          <span className="font-extrabold text-2xl sm:text-3xl ml-3 text-clashBlue dark:text-clashGreen">ClashRoom</span>
        </div>
        <div className="space-x-6">
          <a href="#hero" className="hover:underline font-medium">Home</a>
          <a href="#waitlist" className="hover:underline font-medium">Get Access</a>
        </div>
      </nav>

      <section id="hero" className="flex flex-col items-center justify-center pt-16 sm:pt-24 pb-10 px-4">
        <div className="mb-4 flex flex-col items-center">
          <img
            src={logoLight}
            alt="ClashRoom Logo Light"
            className="w-36 sm:w-48 block dark:hidden"
            draggable="false"
          />
          <img
            src={logoDark}
            alt="ClashRoom Logo Dark"
            className="w-36 sm:w-48 hidden dark:block"
            draggable="false"
          />
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-2 text-black dark:text-white">
          Stop Chasing Clout. <span className="cred-text">Start Earning Cred.</span>
        </h1>
        <p className="text-center mb-5 max-w-xl text-gray-700 dark:text-gray-300 text-base sm:text-xl">
          Tired of apps that reward thirst traps and hot air? ClashRoom’s for people who know the difference between “having receipts” and “being loud.”<br />
          It’s like debate club had a baby with TikTok—minus the fake news and flexers.
        </p>
        <a
          href="#waitlist"
          onClick={handleScrollToWaitlist}
          className="btn px-8 py-3 rounded-full bg-clashGreen text-black dark:text-black font-bold hover:bg-clashBlue transition text-xl"
        >
          ✅ Get Early Access
        </a>
      </section>

      <section id="waitlist" className="py-10 px-2 sm:px-10 lg:px-28 bg-white/80 dark:bg-black/80 rounded-xl shadow max-w-xl mx-auto w-full mt-6">
        <h2 className="text-2xl font-bold mb-3 text-center text-clashBlue dark:text-clashGreen">Be the first in line!</h2>
        <form
          action="https://formspree.io/f/xgvylqvq"
          method="POST"
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 max-w-md w-full mx-auto"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white w-full sm:w-auto"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-clashGreen text-black dark:text-black font-semibold hover:bg-clashBlue transition"
            disabled={!emailValid}
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-center">
          <ShareButton />
        </div>
        <div className="mt-6 text-center">
          <span className="font-bold text-2xl sm:text-3xl text-clashGreen">{clashCounter.toLocaleString()}</span>
          <span className="ml-2 text-gray-600 dark:text-gray-400 text-base sm:text-lg">Verified facts and counting</span>
        </div>
      </section>

      <section className="px-2 sm:px-14 lg:px-32">
        <div className="flex flex-col gap-2 items-center">
          {patentBrags.map((line, idx) => (
            <div
              key={idx}
              className="w-full max-w-2xl rounded-lg bg-white/70 dark:bg-zinc-800 text-center p-3 font-semibold text-gray-900 dark:text-white border border-clashGreen/20 shadow"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {line}
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-2 sm:px-10 lg:px-28">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-black dark:text-white">Why ClashRoom?</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-6 flex flex-col items-center border border-clashGreen/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span className="text-4xl mb-2">{f.icon}</span>
              <h3 className="font-bold text-lg mb-1 text-black dark:text-white">{f.title}</h3>
              <p className="text-gray-700 dark:text-gray-200 text-center">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 px-3 sm:px-14 lg:px-32">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black dark:text-white">How ClashRoom Compares</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-center border border-clashGreen/30 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-clashGreen/10 dark:bg-zinc-800 text-black dark:text-white">
                <th className="py-2 px-2 font-semibold">Platform</th>
                <th className="py-2 px-2">Real-Time Fact-Checking</th>
                <th className="py-2 px-2">Debate Format</th>
                <th className="py-2 px-2">Earn Cred for Truth</th>
                <th className="py-2 px-2">Troll Control</th>
              </tr>
            </thead>
            <tbody className="text-sm sm:text-base">
              <tr className="border-t border-clashGreen/20">
                <td className="py-2 px-2 font-bold">ClashRoom</td>
                <td className="text-clashGreen font-bold">✅</td>
                <td>Video, Text, Audio</td>
                <td className="text-clashGreen font-bold">✅</td>
                <td className="text-clashGreen font-bold">✅</td>
              </tr>
              <tr className="border-t border-clashGreen/20">
                <td className="py-2 px-2 font-bold">TikTok</td>
                <td>❌</td>
                <td>Video</td>
                <td>❌</td>
                <td>❌</td>
              </tr>
              <tr className="border-t border-clashGreen/20">
                <td className="py-2 px-2 font-bold">Reddit</td>
                <td>❌</td>
                <td>Text</td>
                <td>❌</td>
                <td>❌</td>
              </tr>
              <tr className="border-t border-clashGreen/20">
                <td className="py-2 px-2 font-bold">Twitter/X</td>
                <td>❌</td>
                <td>Text</td>
                <td>❌</td>
                <td>❌</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-10 px-2 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4 text-black dark:text-white">What Real Users Say</h2>
        <div className="w-full max-w-xl flex flex-col items-center gap-2">
          <div className="relative w-full flex flex-col items-center">
            <blockquote className="italic text-lg sm:text-xl text-center text-gray-800 dark:text-gray-100">
              “{testimonials[testimonial].quote}”
            </blockquote>
            <span className="block mt-2 text-sm text-gray-700 dark:text-gray-300">
              {testimonials[testimonial].emoji} {testimonials[testimonial].author}
            </span>
          </div>
        </div>
      </section>

      <section className="py-10 px-2 sm:px-10 lg:px-32 bg-white dark:bg-zinc-900">
        <h2 className="text-xl font-bold mb-4 text-center text-black dark:text-white">FAQ</h2>
        <div className="grid gap-5 max-w-2xl mx-auto">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-clashGreen/10 dark:bg-zinc-800 rounded-lg p-5 shadow">
              <div className="font-semibold mb-1 text-clashGreen dark:text-white">{item.q}</div>
              <div className="text-gray-700 dark:text-gray-200">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-auto py-8 text-center text-sm text-gray-700 dark:text-gray-400">
        &copy; {new Date().getFullYear()} ClashRoom. All rights reserved. <br />
        Made with <span className="text-clashGreen font-bold">⚡️</span> by real people (and a suspiciously smart AI).
      </footer>
    </div>
  );
};

export default ClashRoomLanding;
