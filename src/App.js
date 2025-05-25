function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-clashGreen to-clashBlue text-white flex flex-col justify-between font-sans">
      <header className="p-6 flex justify-between items-center">
        <img src="/clashroom-logo.png" alt="ClashRoom logo" className="h-12" />
        <button className="bg-white text-black px-4 py-2 rounded-xl hover:scale-105 transition">
          Join Waitlist
        </button>
      </header>

      <main className="text-center px-6 mt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">The Debate App for a New Generation</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          ClashRoom brings together creators, thinkers, and voters to battle ideas with real-time fact-checking, live voting, and earned credibility.
        </p>
        <div className="mt-10">
          <button className="bg-black text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 duration-150">
            Get Early Access
          </button>
        </div>
      </main>

      <footer className="p-4 text-center text-sm bg-black bg-opacity-20 mt-20">
        © {new Date().getFullYear()} ClashRoom · All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
