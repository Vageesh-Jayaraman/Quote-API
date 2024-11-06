const express = require('express');
const path = require("path");
const app = express();
const data = require('./data.json');

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public', 'main')));
app.use('/main', express.static(path.join(__dirname, 'public', 'main')));
app.use('/Documentation', express.static(path.join(__dirname, 'public', 'Documentation')));
app.use('/API_Testing', express.static(path.join(__dirname, 'public', 'API_Testing')));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "main" ,"index.html"));
});

app.get("/quotes", (req, res) => {
    const limit = parseInt(req.query.limit, 10);
    const filteredQuotes = limit ? data.slice(0, limit) : data; 
    res.json(filteredQuotes);
});

app.get("/quotes/random", (req, res) => {
    const index = Math.floor(Math.random() * data.length);
    res.json(data[index]);
});

app.get("/quotes/:id", (req, res) => {
    const id = req.params.id;
    const filtered = data.find((quote) => quote.id === id);
    res.json(filtered ? [filtered] : []);  
});

app.get("/quotes/category/:category", (req, res) => {
    const category = req.params.category;
    const filtered = data.filter((quote) => quote.category === category);
    res.json(filtered);
});

app.get("/quotes/author/:author", (req, res) => {
    const author = req.params.author;
    const filtered = data.filter((quote) => quote.author === author);
    res.json(filtered);
});

app.get("/quotes/popularity/:score", (req, res) => {
    const score = parseInt(req.params.score, 10);
    const filtered = data.filter((quote) => quote.popularity_score === score);
    res.json(filtered);
});

app.get("/quotes/tag/:tag", (req, res) => {
    const tag = req.params.tag;
    const filtered = data.filter((quote) => quote.tags.includes(tag));
    res.json(filtered);
});

app.get("/quotes/language/:language", (req, res) => {
    const language = req.params.language;
    const filtered = data.filter((quote) => quote.language === language);
    res.json(filtered);
});

app.get("/quotes/date/:date", (req, res) => {
    const date = req.params.date;
    const filtered = data.filter((quote) => {
        const quoteDate = new Date(quote.date_added).toISOString().split('T')[0]; // Format to YYYY-MM-DD
        return quoteDate === date;
    });
    res.json(filtered);
});

app.get("/quotes/date-range", (req, res) => {
    const { start, end } = req.query;
    const startDate = new Date(start);
    const endDate = new Date(end);

    const filtered = data.filter((quote) => {
        const quoteDate = new Date(quote.date_added); 
        return quoteDate >= startDate && quoteDate <= endDate;
    });

    res.json(filtered);
});

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});
