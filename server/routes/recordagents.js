import express from "express";
import db from "../db/connection.js"; // This connects to the 'employees' database
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the agents.
router.get("/", async (req, res) => {
  try {
    const collection = db.collection("agents"); // Use the 'agents' collection
    const results = await collection.find({}).toArray();
    res.status(200).send(results);
  } catch (err) {
    console.error("Error retrieving agents:", err);
    res.status(500).send("Error retrieving agents");
  }
});

// This section will help you get a single agent by id
router.get("/:id", async (req, res) => {
  try {
    const collection = db.collection("agents"); // Use the 'agents' collection
    const query = { _id: new ObjectId(req.params.id) };
    const result = await collection.findOne(query);

    if (!result) {
      res.status(404).send("Agent not found");
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.error("Error retrieving agent:", err);
    res.status(500).send("Error retrieving agent");
  }
});

// This section will help you create a new agent.
router.post("/", async (req, res) => {
  try {
    const newDocument = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      region: req.body.region, // North, East, West, South
      rating: req.body.rating, // Numeric rating
      fee: req.body.fee, // Fee in USD
      position: req.body.position, // Manager, Top Agent, Agent
      sales: req.body.sales, // Sales in USD
    };
    
    const collection = db.collection("agents"); // Use the 'agents' collection
    const result = await collection.insertOne(newDocument);
    res.status(201).send(result);
  } catch (err) {
    console.error("Error adding agent:", err);
    res.status(500).send("Error adding agent");
  }
});

// This section will help you update an agent by id.
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        region: req.body.region, // North, East, West, South
        rating: req.body.rating, // Numeric rating
        fee: req.body.fee, // Fee in USD
        position: req.body.position, // Manager, Top Agent, Agent
        sales: req.body.sales, // Sales in USD
      },
    };

    const collection = db.collection("agents"); // Use the 'agents' collection
    const result = await collection.updateOne(query, updates);
    
    if (result.modifiedCount === 0) {
      res.status(404).send("Agent not found");
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.error("Error updating agent:", err);
    res.status(500).send("Error updating agent");
  }
});

// This section will help you delete an agent
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const collection = db.collection("agents"); // Use the 'agents' collection
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      res.status(404).send("Agent not found");
    } else {
      res.status(200).send("Agent deleted");
    }
  } catch (err) {
    console.error("Error deleting agent:", err);
    res.status(500).send("Error deleting agent");
  }
});

export default router;
