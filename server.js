const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const candidateRoutes = require("./routes/candidateRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

// Candidate Routes
app.use("/api/candidates", candidateRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("Intern Candidate Management System API is Running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});