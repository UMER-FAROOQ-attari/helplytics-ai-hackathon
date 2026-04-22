const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 5000;
const clientDistPath = path.resolve(__dirname, '../client/dist');

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);
app.use(express.json());

mongoose.set('bufferCommands', false);

const requestSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    tags: [{ type: String, trim: true }],
    category: { type: String, trim: true },
    urgency: { type: String, trim: true },
    author: { type: String, trim: true },
    location: { type: String, trim: true },
    helpers: { type: Number, default: 0, min: 0 }
  },
  { strict: false, timestamps: true }
);
const Request = mongoose.model('Request', requestSchema);

const genAI = process.env.GEMINI_API_KEY
  ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  : null;
const geminiModelName = process.env.GEMINI_MODEL || 'gemini-2.0-flash';

const isMongoReady = () => mongoose.connection.readyState === 1;
const isValidObjectId = (value) => mongoose.Types.ObjectId.isValid(value);

function ensureMongoReady(_req, res, next) {
  if (!isMongoReady()) {
    return res.status(503).json({
      error: 'Database is not connected yet. Please try again in a few seconds.'
    });
  }
  return next();
}

async function connectMongo() {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error('MONGO_URI is missing in server/.env');
  }

  await mongoose.connect(mongoUri, {
    serverSelectionTimeoutMS: 10000
  });
  console.log('MongoDB connected');
}

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    mongoReadyState: mongoose.connection.readyState,
    mongoConnected: isMongoReady(),
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY)
  });
});

app.post('/api/ai/analyze', async (req, res) => {
  try {
    const description = req.body?.description?.trim();

    if (!description) {
      return res.status(400).json({ error: 'Description is required' });
    }

    if (!genAI) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is missing' });
    }

    const model = genAI.getGenerativeModel({ model: geminiModelName });
    const result = await model.generateContent(
      `Give a short 3-step solution for this issue:\n${description}`
    );
    const analysis = result?.response?.text?.();

    if (!analysis) {
      return res.status(502).json({ error: 'Gemini returned an empty response' });
    }

    return res.json({ analysis });
  } catch (error) {
    console.error('AI analyze error:', error.message);
    return res.status(500).json({ error: 'Failed to analyze request with AI' });
  }
});

app.post('/api/requests', ensureMongoReady, async (req, res) => {
  try {
    const title = req.body?.title?.trim();
    const description = req.body?.description?.trim();

    if (!title || !description) {
      return res.status(400).json({ error: 'title and description are required' });
    }

    const created = await Request.create({ ...req.body, title, description });
    return res.status(201).json(created);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get('/api/requests', ensureMongoReady, async (_req, res) => {
  try {
    const all = await Request.find().sort({ createdAt: -1 });
    return res.json(all);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get('/api/requests/:id', ensureMongoReady, async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: 'Invalid request id' });
    }

    const item = await Request.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Not found' });
    }

    return res.json(item);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.put('/api/requests/help/:id', ensureMongoReady, async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: 'Invalid request id' });
    }

    const updated = await Request.findByIdAndUpdate(
      req.params.id,
      { $inc: { helpers: 1 } },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Not found' });
    }

    return res.json(updated);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.use(express.static(clientDistPath));

app.get(/^(?!\/api(?:\/|$)).*/, (req, res) => {
  return res.sendFile(path.join(clientDistPath, 'index.html'));
});

app.use('/api', (_req, res) => {
  res.status(404).json({ error: 'API route not found' });
});

async function startServer() {
  try {
    await connectMongo();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Startup error:', error.message);
    process.exit(1);
  }
}

startServer();
