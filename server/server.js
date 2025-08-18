import "./config/instrument.js";
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from "./controllers/webhooks.js";
import companyRoutes from "./routes/companyRoutes.js"
import connectCloudinary from "./config/cloudinary.js";
import jobRoutes from "./routes/jobRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import {clerkMiddleware} from "@clerk/express"


//EXPRESS INIT
const app = express();

//DATABASE CONNECTION
await connectDB();
await connectCloudinary();


//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware())



//ROUTES
app.get("/", (req, res) => {
  res.send("api working");
});
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post('/webhooks',clerkWebhooks)
app.use('/api/company',companyRoutes)
app.use('/api/jobs',jobRoutes)
app.use('/api/users',userRoutes)



//PORT 
const PORT = process.env.PORT || 5000;

// Sentry error handler (must be after routes, before other middleware)
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
