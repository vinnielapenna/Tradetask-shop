import { hires } from "../../lib/data";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { to, from, title, location, description } = req.body;
    hires.push({ to, from, title, location, description });
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
