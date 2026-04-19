require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('db connected'))
  .catch(err => console.log(err));

const requestSchema = new mongoose.Schema({}, { strict: false, timestamps: true });
const Request = mongoose.model('Request', requestSchema);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/ai/analyze', async (req, res) => {
  try {
    const { description } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("Give a very short 3 step solution for: " + description);
    const response = await result.response;
    res.json({ analysis: response.text() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/requests', async (req, res) => {
  try {
    const data = new Request(req.body);
    const saved = await data.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/requests', async (req, res) => {
  try {
    const all = await Request.find().sort({ createdAt: -1 });
    res.json(all);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/requests/:id', async (req, res) => {
  try {
    const item = await Request.findById(req.params.id);
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/requests/help/:id', async (req, res) => {
  try {
    const updated = await Request.findByIdAndUpdate(
      req.params.id,
      { $inc: { helpers: 1 } },
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log('server running on 5000');
});