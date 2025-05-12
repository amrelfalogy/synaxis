const express = require("express");
const Parser = require("rss-parser");
const cors = require("cors");
const NodeCache = require("node-cache");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express(); // Ensure `app` is declared here
const parser = new Parser();
const cache = new NodeCache({ stdTTL: 600 }); // Cache for 10 minutes

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// RSS feed sources
const feeds = {
  youm7: "https://www.youm7.com/rss/SectionRss?SectionID=65",
};

// RSS feed endpoint
app.get("/rss/:source", async (req, res) => {
  const source = req.params.source;
  const feedUrl = feeds[source];

  if (!feedUrl) {
    return res.status(404).json({ error: "News source not found" });
  }

  // Check if data is in cache
  const cachedData = cache.get(source);
  if (cachedData) {
    console.log("Serving from cache");
    return paginate(cachedData, req, res);
  }

  try {
    const feed = await parser.parseURL(feedUrl);
    const items = feed.items;

    // Cache the full feed
    cache.set(source, items);

    // Return paginated data
    paginate(items, req, res);
  } catch (error) {
    console.error(`Error fetching RSS feed from ${source}:`, error.message);
    res.status(500).json({ error: "Failed to fetch RSS feed" });
  }
});

function paginate(items, req, res) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedItems = items.slice(startIndex, endIndex);

  res.json({
    totalItems: items.length,
    totalPages: Math.ceil(items.length / limit),
    currentPage: page,
    items: paginatedItems,
  });
}

// Basic route for the root URL
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Endpoint to send email
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input data
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL_RECEIVER,
    subject: `Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).json({ message: "Email sent successfully" }); // Always return JSON
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" }); // Return a JSON error response
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});