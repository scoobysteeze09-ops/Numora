export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  
  return res.status(200).json([
    { id: 1, title: "Remote Customer Support - USA", company: "Amazon USA", salary: "$18/hr", type: "Remote", location: "USA Remote", icon: "💼" },
    { id: 2, title: "Data Entry Specialist", company: "US Tech Corp", salary: "$22/hr", type: "Part-time", location: "USA Remote", icon: "⌨️" },
    { id: 3, title: "Virtual Assistant USA", company: "HireUSA", salary: "$25/hr", type: "Full-time", location: "USA Remote", icon: "🧑‍💻" },
    { id: 4, title: "Online Chat Support", company: "Support LLC", salary: "$20/hr", type: "Remote", location: "USA", icon: "💬" },
    { id: 5, title: "Remote Sales Agent", company: "USA Sales Pro", salary: "$30/hr", type: "Remote", location: "USA Remote", icon: "📞" }
  ]);
}