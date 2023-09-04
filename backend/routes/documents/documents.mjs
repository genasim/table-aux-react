import express from "express";
import { ObjectId } from "mongodb";
import db from "../../db/conn.mjs";
import { count_query, marked_query, paginate, unchanged_query } from "./queries.mjs"

const router = express.Router();

const AUX_COLL = 'aux-react'

// Get a list of all docs
router.get("/", async (req, res) => {
  const { filter, page, size } = req.query
  let filter_query = null
  //  Set default values in case of API testing
  const paginate_query = paginate({
    page: page != null ? parseInt(page) : 1,
    size: size != null ? parseInt(size) : 10
  })

  try {
    const collection = await db.collection(AUX_COLL);

    if (filter === 'marked') {
      filter_query = marked_query
    }
    else if (filter === 'unchanged') {
      filter_query = unchanged_query
    }

    const [totalCount, filteredCount, filteredResults] = await Promise.all([
      collection.aggregate([count_query]).toArray(),
      collection.aggregate((filter_query ? [filter_query, count_query] : [count_query])).toArray(),
      collection.aggregate([filter_query, ...paginate_query]).toArray()
    ])
    const respone = {
      totalCount: totalCount[0].total,
      filteredCount: filteredCount[0].total,
      results: filteredResults
    }

    res.send(respone).status(200);
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
    const query = { _id: ObjectId(req.params.id) }
    const collection = db.collection(AUX_COLL)

    const body = req.body
    const result = await collection.updateOne(query, {
      $set: body
    })

    res.send(result).status(200)
  } catch (error) {
    console.error(error);
    res.send(null).status(500)
  }
})

export default router;
