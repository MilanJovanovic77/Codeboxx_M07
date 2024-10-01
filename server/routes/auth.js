import express from "express";
import { getDb } from "../db/connection.js";

const router = express.Router();

// POST route for login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body; // Get email and password from request body
    const db = getDb();

    // Check if the email exists in the "agents" collection
    const agent = await db.collection("agents").findOne({ email });

    if (!agent) {
      // If agent is not found in "agents" collection, return 404
      return res.status(404).json({ error: "Access Denied: Agent not found" });
    }

    // Now check if the email exists in the "users" collection for password validation
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "Access Denied: User not found" });
    }

    // Directly compare the provided password with the user's password
    const isMatch = password === user.password;

    if (!isMatch) {
      // If password is incorrect
      return res.status(401).json({ error: "Wrong password, please try again." });
    }

    // If everything is okay, return a success message
    return res.status(200).json({ message: "Login successful!" });
  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;