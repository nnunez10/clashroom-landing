import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-sans p-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-3">About ClashRoom</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          ClashRoom isn’t just a debate app — it’s a movement for viral truth, smart content, and fearless conversation.
        </p>
        <Link to="/" className="inline-block mt-6 text-clash-green hover:text-clash-turquoise underline">
          ← Back to Home
        </Link>
      </header>

      {/* Origin Story */}
      <section className="max-w-3xl mx-auto space-y-12 text-lg">
        <div>
          <h2 className="text-2xl font-semibold mb-2">📖 The Origin</h2>
          <p>
            ClashRoom was born out of frustration with misinformation, echo chambers, and social media that rewards outrage over intelligence.
            We wanted a place where people could clash, learn, evolve, and earn real respect for real truth. So we built it.
          </p>
        </div>

        {/* What We've Built */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">🛠 What We've Built So Far</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>✅ ClashBot™ – real-time AI fact-checks built into debates</li>
            <li>✅ ClaimDNA™ – tracks claim origin, edits, and responses over time</li>
            <li>✅ ClashCred™ – a reputation system for verified intelligence</li>
            <li>✅ SourcePin™ – lock in sources before they disappear</li>
            <li>✅ Waitlist + email integration (EmailJS)</li>
            <li>✅ Live landing page with mobile-first design</li>
          </ul>
        </div>

        {/* What's Coming */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">🔮 What’s Coming Next</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>🎥 Live + recorded debate formats (face, voice, text)</li>
            <li>🔥 ClashBack™ replies and shareable ClashClips</li>
            <li>📈 Creator leaderboards, trending debates, and challenges</li>
            <li>🎓 Partnerships with schools, podcasts, and journalists</li>
            <li>⛓ Blockchain claim tracking (ClaimDNA patent pending)</li>
            <li>💡 ClashCoach™ AI assistant for smarter debating</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">🚀 Join the Movement</h2>
          <p>
            ClashRoom is for thinkers, skeptics, comedians, creators, and anyone sick of the fake, fluffy scroll. 
            Join the waitlist, challenge a friend, or just follow along as we turn truth into a flex.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-clash-turquoise">
        © {new Date().getFullYear()} ClashRoom. Truth, now trending.
      </footer>
    </div>
  );
};

export default AboutPage;
