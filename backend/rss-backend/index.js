const express = require("express");
const Parser = require("rss-parser");
const cors = require("cors");
const NodeCache = require("node-cache");

const app = express(); // Ensure `app` is declared here
const parser = new Parser();
const cache = new NodeCache({ stdTTL: 600 }); // Cache for 10 minutes

app.use(cors());

// RSS feed sources
const feeds = {
  youm7: "https://www.youm7.com/rss/SectionRss?SectionID=65",
};

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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
