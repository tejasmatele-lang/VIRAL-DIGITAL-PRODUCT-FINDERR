import { useState } from "react";

function App() {
  const [niche, setNiche] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const res = await fetch(`/api/research?niche=${encodeURIComponent(niche)}`);
    const json = await res.json();
    setData(json);
    setLoading(false);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Viral Digital Product Finder by Tejas Gupta</h1>
      <input
        type="text"
        placeholder="Enter a niche"
        value={niche}
        onChange={(e) => setNiche(e.target.value)}
        className="border rounded p-2 mr-2"
      />
      <button
        onClick={fetchData}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Searching..." : "Search"}
      </button>

      {data && (
        <div className="mt-6">
          <h2 className="font-bold">Products:</h2>
          <ul className="list-disc pl-6">
            {data.products.map((p: string, i: number) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

          <h2 className="font-bold mt-4">AI Insights:</h2>
          <pre className="whitespace-pre-wrap bg-gray-100 p-3 rounded">
            {data.analysis}
          </pre>
        </div>
      )}

      <footer className="mt-8 text-center text-sm text-gray-500">
        Made with ❤️ by Tejas Gupta
      </footer>
    </div>
  );
}

export default App;
