import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

const AUX_COLL = 'aux-react'

// Get a list of 50 posts
router.get("/", async (req, res) => {
  try {
    let collection = await db.collection(AUX_COLL);
    let results = await collection.find({})
      .toArray();

    res.send(results).status(200);
  } catch (error) {
    console.error(error);
    res.send([]).status(500)
  }
});

// Fetches the latest posts
router.get("/latest", async (req, res) => {
  try {
    let collection = await db.collection(AUX_COLL);
    let results = await collection.aggregate([
      { "$project": { "author": 1, "title": 1, "tags": 1, "date": 1 } },
      { "$sort": { "date": -1 } },
      { "$limit": 3 }
    ]).toArray();

    res.send(results).status(200);
  } catch (error) {
    console.error(error);
    res.send([]).status(500)
  }
});

// Get a single post
router.get("/:id", async (req, res) => {
  try {
    let collection = await db.collection(AUX_COLL);
    let query = { _id: ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    result ? res.send(result).status(200) : res.send(null).status(404)
  } catch (error) {
    console.error(error);
    res.send(null).status(500)
  }
});

// Add a new document to the collection
router.post("/", async (req, res) => {
  try {
    let collection = await db.collection(AUX_COLL);
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);

    res.send(result).status(204);
  } catch (error) {
    console.error(error);
    res.send(null).status(500)
  }
});

// Update the post with a new comment
router.patch("/comment/:id", async (req, res) => {
  try {
    const query = { _id: ObjectId(req.params.id) };
    const updates = {
      $push: { comments: req.body }
    };

    let collection = await db.collection(AUX_COLL);
    let result = await collection.updateOne(query, updates);

    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.send(null).status(500)
  }
});

// Delete an entry
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: ObjectId(req.params.id) };

    const collection = db.collection(AUX_COLL);
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.send([]).status(500)
  }
});

export default router;
