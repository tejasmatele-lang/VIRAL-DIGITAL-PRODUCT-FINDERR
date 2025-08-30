import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Viral Digital Product Finder</h1>
      <p className="text-lg text-gray-700 mb-6">
        Find winning digital products and uncover market gaps instantly.
      </p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Business growth"
        className="w-40 mb-6"
      />
      <Link to="/app">
        <button className="bg-blue-500 text-white px-6 py-3 rounded text-lg">
          Start Now →
        </button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl">
        <div className="p-4 border rounded shadow-sm">
          <h3 className="font-bold mb-2">📊 Real Market Data</h3>
          <p>We fetch digital product trends from live internet data.</p>
        </div>
        <div className="p-4 border rounded shadow-sm">
          <h3 className="font-bold mb-2">🤖 AI-Powered Insights</h3>
          <p>Get competitor weaknesses summarized automatically.</p>
        </div>
        <div className="p-4 border rounded shadow-sm">
          <h3 className="font-bold mb-2">🚀 Actionable Opportunities</h3>
          <p>Discover new product ideas that customers actually need.</p>
        </div>
      </div>

      <footer className="mt-12 text-sm text-gray-500">
        Made with ❤️ by Tejas Gupta
      </footer>
    </div>
  );
}

export default Landing;
