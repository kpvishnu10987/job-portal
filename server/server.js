import "./config/instrument.js";

import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import * as Sentry from "@sentry/node";
import { clerckWebhooks } from "./controllers/webhooks.js";

const app = express();

await connectDB();


//MIDDLEWARE
app.use(cors());
app.use(express.json());


//ROUTES
app.get("/", (req, res) => {
  res.send("api working");
});
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post('/webhooks',clerckWebhooks)



//PORT 
const PORT = process.env.PORT || 5000;

// Sentry error handler (must be after routes, before other middleware)
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
