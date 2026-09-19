import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const JOBS = [
  { id: 1, title: "Remote Customer Support - USA", company: "Amazon USA", salary: "$18/hr", type: "Remote", location: "USA Remote", icon: "💼" },
  { id: 2, title: "Data Entry Specialist", company: "US Tech Corp", salary: "$22/hr", type: "Part-time", location: "USA Remote", icon: "⌨️" },
  { id: 3, title: "Virtual Assistant USA", company: "HireUSA", salary: "$25/hr", type: "Full-time", location: "USA Remote", icon: "🧑‍💻" },
  { id: 4, title: "Online Chat Support", company: "Support LLC", salary: "$20/hr", type: "Remote", location: "USA", icon: "💬" },
  { id: 5, title: "Remote Sales Agent", company: "USA Sales Pro", salary: "$30/hr", type: "Remote", location: "USA Remote", icon: "📞" }
];

app.get('/api/jobs', (req, res) => {
  res.json(JOBS);
});

app.get('/api/auth', (req, res) => {
  res.json({ ok: true });
});

// For local dev + Vercel fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;

// Only listen locally, NOT on Vercel (Vercel uses api/ folder)
if (!process.env.VERCEL) {
  app.listen(PORT, () => console.log(`Numora running on http://localhost:${PORT}`));
}

export default app;