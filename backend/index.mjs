import cors from "cors";
import express from "express";
import "express-async-errors";
import "./loadEnvironment.mjs";
import documents from './routes/documents/documents.mjs'

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /docs routes
app.use("/docs", documents);

// // Global error handling
// app.use((err, _req, res, next) => {
//   res.status(500).send("Uh oh! An unexpected error occured.")
// })

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
