const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// SECURITY UPDATE: Replace the asterisk or empty cors() with your actual frontend URL
// Example: "https://blog-project-frontend.vercel.app"
app.use(cors({
  origin: "*" // Change "*" to your specific Vercel frontend URL once it finishes deploying
}));

app.use(bodyParser.json());

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/blogDB';

mongoose.connect(mongoURI)
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log("Connection Error: ", err));

const blogSchema = new mongoose.Schema({
  newTitle: String,
  newContent: String,
  date: String,
  likes: { type: Number, default: 0 }
});

const Blog = mongoose.model('Blog', blogSchema);

// Home route to verify deployment status
app.get('/', (req, res) => {
  res.send("Blog API is running successfully!");
});

// GET all blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.send(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// LIKE a blog post
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

// POST a new blog
app.post('/api/blogs', async (req, res) => {
  const blog = new Blog({
    newTitle: req.body.newTitle,
    newContent: req.body.newContent,
    date: req.body.date,
    likes: req.body.likes || 0
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start server locally if not in production
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// Export for Vercel
module.exports = app;