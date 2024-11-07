require('dotenv').config()
const express = require('express');
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const Data = require("../models/data")
const generateQuotes = require('../gen-ai/addQuotes');

const PORT = process.env.PORT || 3000;
const dbURI = process.env.dbURI;

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(dbURI)
    .then((result) => {
        app.listen(PORT, () => {
            console.log(`Server started at PORT ${PORT}`);
        });
    })
    .catch((err)=> console.log("Some error occurred " + err));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "main", "index.html"));
});

app.get('/quotes/generate', async (req, res) => {
    try {
        const generatedData = await generateQuotes();
        console.log(generatedData);
        if (!generatedData) {
            return res.status(500).json({ error: "Failed to generate quotes" });
        }

        const entry = new Data(generatedData);  
        await entry.save();

        res.status(200).json(generatedData);
    } catch (error) {
        console.error("Error in /generate route:", error);
        res.status(500).json({ error: "Server error" });
    }
});

app.get("/quotes", async (req, res) => {
    const limit = parseInt(req.query.limit, 10);
    try {
        const quotes = limit 
            ? await Data.find().limit(limit).select("-_id -__v")
            : await Data.find().select("-_id -__v");
        res.json(quotes);
    } catch (error) {
        console.error("Error fetching quotes:", error);
        res.status(500).json({ error: "Failed to fetch quotes" });
    }
});

app.get("/quotes/random", async (req, res) => {
    try {
        const count = await Data.countDocuments();
        const random = Math.floor(Math.random() * count);
        const randomQuote = await Data.findOne().skip(random).select("-_id -__v");
        res.json(randomQuote);
    } catch (error) {
        console.error("Error fetching random quote:", error);
        res.status(500).json({ error: "Failed to fetch random quote" });
    }
});

app.get("/quotes/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const quote = await Data.findOne({ id }).select("-_id -__v");
        res.json(quote ? [quote] : []);
    } catch (error) {
        console.error("Error fetching quote by ID:", error);
        res.status(500).json({ error: "Failed to fetch quote by ID" });
    }
});

app.get("/quotes/category/:category", async (req, res) => {
    const category = req.params.category;
    try {
        const quotes = await Data.find({ category }).select("-_id -__v");
        res.json(quotes);
    } catch (error) {
        console.error("Error fetching quotes by category:", error);
        res.status(500).json({ error: "Failed to fetch quotes by category" });
    }
});

app.get("/quotes/author/:author", async (req, res) => {
    const author = req.params.author;
    try {
        const quotes = await Data.find({ author }).select("-_id -__v");
        res.json(quotes);
    } catch (error) {
        console.error("Error fetching quotes by author:", error);
        res.status(500).json({ error: "Failed to fetch quotes by author" });
    }
});

app.get("/quotes/popularity/:score", async (req, res) => {
    const score = parseInt(req.params.score, 10);
    try {
        const quotes = await Data.find({ popularity_score: score }).select("-_id -__v");
        res.json(quotes);
    } catch (error) {
        console.error("Error fetching quotes by popularity score:", error);
        res.status(500).json({ error: "Failed to fetch quotes by popularity score" });
    }
});

app.get("/quotes/tag/:tag", async (req, res) => {
    const tag = req.params.tag;
    try {
        const quotes = await Data.find({ tags: { $in: [tag] } }).select("-_id -__v");
        res.json(quotes);
    } catch (error) {
        console.error("Error fetching quotes by tag:", error);
        res.status(500).json({ error: "Failed to fetch quotes by tag" });
    }
});

app.get("/quotes/language/:language", async (req, res) => {
    const language = req.params.language;
    try {
        const quotes = await Data.find({ language }).select("-_id -__v");
        res.json(quotes);
    } catch (error) {
        console.error("Error fetching quotes by language:", error);
        res.status(500).json({ error: "Failed to fetch quotes by language" });
    }
});

app.get("/quotes/date/:date", async (req, res) => {
    const date = req.params.date;
    try {
        const quotes = await Data.find({
            date_added: {
                $gte: new Date(date),
                $lt: new Date(new Date(date).getTime() + 24 * 60 * 60 * 1000)
            }
        }).select("-_id -__v");
        res.json(quotes);
    } catch (error) {
        console.error("Error fetching quotes by date:", error);
        res.status(500).json({ error: "Failed to fetch quotes by date" });
    }
});

app.get("/quotes/date-range", async (req, res) => {
    const { start, end } = req.query;
    try {
        const quotes = await Data.find({
            date_added: {
                $gte: new Date(start),
                $lte: new Date(end)
            }
        }).select("-_id -__v");
        res.json(quotes);
    } catch (error) {
        console.error("Error fetching quotes by date range:", error);
        res.status(500).json({ error: "Failed to fetch quotes by date range" });
    }
});

