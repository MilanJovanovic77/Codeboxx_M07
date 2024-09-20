import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  try {
    let collection = await db.collection("records");
    let results = await collection.find({}).toArray();
    res.status(200).send(results);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving records");
  }
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  try {
    let collection = await db.collection("records");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) {
      res.status(404).send("Not found");
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving record");
  }
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  try {
    let newDocument = {
      name: req.body.name,
      position: req.body.position, // Manager, Top Agent, Agent
      region: req.body.region, // North, East, West, South
      rating: req.body.rating, // Numeric rating
      fees: req.body.fees, // Fees in USD
      sales: req.body.sales, // Sales in USD
    };
    
    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding record");
  }
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        position: req.body.position, // Manager, Top Agent, Agent
        region: req.body.region, // North, East, West, South
        rating: req.body.rating, // Numeric rating
        fees: req.body.fees, // Fees in USD
        sales: req.body.sales, // Sales in USD
      },
    };

    let collection = await db.collection("records");
    let result = await collection.updateOne(query, updates);
    
    if (result.modifiedCount === 0) {
      res.status(404).send("Record not found");
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating record");
  }
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const collection = db.collection("records");
    let result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      res.status(404).send("Record not found");
    } else {
      res.status(200).send("Record deleted");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
});

export default router;