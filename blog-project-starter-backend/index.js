const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const dotenv = require('dotenv');

// Initialize dotenv to read .env file locally
dotenv.config();

const app = express();

// Update CORS to allow your Vercel frontend later
app.use(cors());

// Middleware
app.use(bodyParser.json());

// MongoDB Connection using Environment Variable
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/blogDB';

mongoose.connect(mongoURI)
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log("Connection Error: ", err));

// Define Schema
const blogSchema = new mongoose.Schema({
  newTitle: String,
  newContent: String,
  date: String,
  likes: Number
});

const Blog = mongoose.model('Blog', blogSchema);

// Routes
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.send(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.patch('/api/blogs/like/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    if (!updatedBlog) return res.status(404).json({ message: 'Blog not found' });
    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/blogs', async (req, res) => {
  const blog = new Blog({
    newTitle: req.body.newTitle,
    newContent: req.body.newContent,
    date: req.body.date,
    likes: req.body.likes
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(5000, () => console.log('Server running on port 5000'));
}

// CRITICAL: Export the app for Vercel
module.exports = app;