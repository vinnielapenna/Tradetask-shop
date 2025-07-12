import { jobs } from "../../lib/data";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(jobs);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
