import verifyToken from "./middleware/verifyToken.js";  // Import middleware

// Protect routes with verifyToken middleware
app.use("/agents", verifyToken, recordAgents);  // All /agents routes now require a valid token
app.use("/record", verifyToken, records);       // Protect record routes
