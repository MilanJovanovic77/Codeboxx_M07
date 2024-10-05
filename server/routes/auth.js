import jwt from "jsonwebtoken";
import express from "express";
import { getDb } from "../db/connection.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const db = getDb();

    const agent = await db.collection("agents").findOne({ email });
    if (!agent) {
      return res.status(404).json({ error: "Access Denied: Agent not found" });
    }

    const user = await db.collection("users").findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Access Denied: User not found" });
    }

    const isMatch = password === user.password;
    if (!isMatch) {
      return res.status(401).json({ error: "Wrong password, please try again." });
    }

    // If login is successful, issue a JWT token
    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: "1h" }); // token valid for 1 hour

    // Send the token as part of the response
    return res.status(200).json({ message: "Login successful!", token });
  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;