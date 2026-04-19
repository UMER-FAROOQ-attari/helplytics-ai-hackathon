const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI;
const geminiApiKey = process.env.GEMINI_API_KEY;

app.use(cors());
app.use(express.json());

if (!mongoUri) {
  console.error('MONGO_URI is missing. Check backend/.env');
  process.exit(1);
}

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected.'))
  .catch((err) => console.error('MongoDB connection error:', err.message));

const requestSchema = new mongoose.Schema({}, { strict: false, timestamps: true });
const Request = mongoose.model('Request', requestSchema);

const genAI = geminiApiKey ? new GoogleGenerativeAI(geminiApiKey) : null;

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    mongoReadyState: mongoose.connection.readyState,
    geminiConfigured: Boolean(geminiApiKey)
  });
});

app.post('/api/ai/analyze', async (req, res) => {
  try {
    const { description } = req.body;

    if (!description) {
      return res.status(400).json({ error: 'Description is missing' });
    }

    if (!genAI) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is missing in backend/.env' });
    }

   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });    const result = await model.generateContent(`Give a very short 3 step solution for: ${description}`);
    const response = await result.response;

    res.json({ analysis: response.text() });
  } catch (error) {
    console.error('AI route error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/requests', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database is not connected yet.' });
    }

    const data = new Request(req.body);
    const saved = await data.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/requests', async (_req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database is not connected yet.' });
    }

    const all = await Request.find().sort({ createdAt: -1 });
    res.json(all);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/requests/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database is not connected yet.' });
    }

    const item = await Request.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ error: 'Request not found' });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/requests/help/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database is not connected yet.' });
    }

    const updated = await Request.findByIdAndUpdate(
      req.params.id,
      { $inc: { helpers: 1 } },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Request not found' });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
