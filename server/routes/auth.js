import express from "express";
import { getDb } from "../db/connection.js";

const router = express.Router();

// POST route for login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const db = getDb();
    const collection = db.collection("users");

    // Check if the email exists in the database
    const user = await collection.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Access Denied" });  // Email not found
    }

    // Compare provided password with the stored password (no hashing, as requested)
    if (password === user.password) {
      return res.status(200).json({ message: "Login successful!" });  // Passwords match
    } else {
      return res.status(401).json({ error: "Wrong password, please try again." });  // Incorrect password
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });  // Handle server errors
  }
});

export default router;
