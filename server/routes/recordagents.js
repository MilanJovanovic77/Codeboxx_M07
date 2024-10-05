import express from "express";
import { getDb } from "../db/connection.js"; // Use the new getDb function
import { ObjectId } from "mongodb";

const router = express.Router();

// Get a list of all the records
router.get("/", async (req, res) => {
  try {
    const db = getDb();
    const collection = db.collection("agents");
    const results = await collection.find({}).toArray();

    const formattedResults = results.map(agent => ({
      ...agent,
      fee: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(agent.fee || 0),
      sales: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(agent.sales || 0),
    }));

    res.status(200).send(formattedResults);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving agents");
  }
});


// Get a single record by id
router.get("/:id", async (req, res) => {
  try {
    const db = getDb();
    const collection = db.collection("agents");
    const query = { _id: new ObjectId(req.params.id) };
    const result = await collection.findOne(query);

    if (!result) {
      res.status(404).send("Agent not found");
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving agent");
  }
});

// Create a new agent
router.post("/", async (req, res) => {
  try {
    const db = getDb();
    const newDocument = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,  // Include email here
      position: req.body.position,
      region: req.body.region,
      rating: parseFloat(req.body.rating) || 0,  // Ensure rating is a number
      fee: parseFloat(req.body.fee) || 0,  // Ensure fee is a number
      sales: parseFloat(req.body.sales) || 0,  // Ensure sales is a number
    };

    const collection = db.collection("agents");
    const result = await collection.insertOne(newDocument);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding agent");
  }
});

// Update agent by id
router.patch("/:id", async (req, res) => {
  try {
    const db = getDb();
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,  // Include email here
        position: req.body.position,
        region: req.body.region,
        rating: parseFloat(req.body.rating) || 0,
        fee: parseFloat(req.body.fee) || 0,
        sales: parseFloat(req.body.sales) || 0,
      },
    };

    const result = await db.collection("agents").updateOne(query, updates);

    if (result.matchedCount === 0) {
      return res.status(404).send("Agent not found");
    }

    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating agent");
  }
});

// Delete a record
router.delete("/:id", async (req, res) => {
  try {
    const db = getDb();
    const query = { _id: new ObjectId(req.params.id) };
    const collection = db.collection("agents");
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      res.status(404).send("Agent not found");
    } else {
      res.status(200).send("Agent deleted");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting agent");
  }
});

export default router;