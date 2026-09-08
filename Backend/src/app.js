const express = require("express");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "RateGuard API is running 🚀"
    });
});

module.exports = app;