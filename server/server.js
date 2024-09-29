import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import recordAgents from "./routes/recordagents.js";
import authRoutes from "./routes/auth.js"; // Use ES module import

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Route for "records"
app.use("/record", records);

// Route for "agents"
app.use("/agents", recordAgents);

// Route for authorization
app.use("/auth", authRoutes); // Register for the Login route

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});