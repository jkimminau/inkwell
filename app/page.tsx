const accent = "#14b8a6";

const features = [
  "Local-first cloud sync",
  "AI-suggested backlinks",
  "Semantic search across notes",
  "Graph view",
];

export default function Home() {
  return (
    <main style={{ "--accent": accent } as React.CSSProperties}>
      <span className="pill">
        <span className="dot" /> In development
      </span>
      <h1>inkwell</h1>
      <p className="tagline">
        A cloud-synced markdown notebook — local-first feel, real cross-device
        sync, and an AI layer that surfaces connections between your notes.
      </p>
      <ul className="features">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <footer>
        <span>By Jamison Kimminau</span>
        <a href="https://github.com/jkimminau/inkwell">View on GitHub →</a>
      </footer>
    </main>
  );
}
