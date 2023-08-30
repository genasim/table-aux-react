import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

const AUX_COLL = 'aux-react'

// Get a list of all docs
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

// Get a single doc
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
    let result = await collection.insertOne(newDocument);

    res.send(result).status(204);
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
    const result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.send(null).status(500)
  }
});

router.put('/:id', async (req, res) => {
  try {
    const query = { _id: ObjectId(req.params.id)}
    
    const collection = db.collection(AUX_COLL)
    const result = await collection.updateOne(query)

    res.send(result).status(200)
  } catch (error) {
    console.error(error);
    res.send(null).status(500)
  }
})

export default router;
