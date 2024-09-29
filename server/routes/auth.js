import express from "express";
import bcrypt from "bcryptjs"; // For password hashing
import { getDb } from "../db/connection.js";

const router = express.Router();

// POST route for login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const db = getDb();
    const collection = db.collection("users");

    // Find the user by email
    const user = await collection.findOne({ email });

    if (!user) {
      // If user is not found
      return res.status(404).json({ error: "Access Denied" });
    }

    // Compare the provided password with the hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      // If password is incorrect
      return res.status(401).json({ error: "Wrong password, please try again." });
    }

    // If the login is successful, you can send a success message or token (JWT)
    return res.status(200).json({ message: "Login successful!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;