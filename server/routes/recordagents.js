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

    // Format the fee and sales as USD before sending to frontend
    const formattedResults = results.map(agent => ({
      ...agent,
      fee: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(agent.fee),
      sales: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(agent.sales),
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

// Create a new record
router.post("/", async (req, res) => {
  try {
    const db = getDb();
    const newDocument = {
      first_name: req.body.name,
      last_name: req.body.last_name,
      email: req.body.email,
      position: req.body.position,
      region: req.body.region,
      rating: req.body.rating,
      fee: req.body.fee,
      sales: req.body.sales,
    };

    const collection = db.collection("agents");
    const result = await collection.insertOne(newDocument);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding agent");
  }
});

// Update a record by id
router.patch("/:id", async (req, res) => {
  try {
    // Validate if the id is a valid ObjectId
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).send("Invalid Agent ID");
    }

    const db = getDb();
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        region: req.body.region,
        rating: req.body.rating,
        fee: req.body.fee,
        position: req.body.position,
        sales: req.body.sales,
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