import express from "express";
import cors from "cors";
import records from "./routes/record.js"; // Import records route
import recordAgents from "./routes/recordagents.js"; // Import recordAgents route

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Route for "records"
app.use("/record", records);

// Route for "agents"
app.use("/api/agents", recordAgents); // Set the agents route under /api/agents

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});