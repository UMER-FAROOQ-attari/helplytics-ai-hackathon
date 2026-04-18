require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// 1. MongoDB Connection
if (!process.env.MONGO_URI) {
  console.error("❌ ERROR: MONGO_URI is missing in .env file!");
}

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected successfully!'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err.message));

// 2. Schema
const requestSchema = new mongoose.Schema({}, { strict: false, timestamps: true });
const Request = mongoose.model('Request', requestSchema);

// 3. POST Route - ڈیٹا سیو کرنے کے لیے
app.post('/api/requests', async (req, res) => {
  try {
    const newRequest = new Request(req.body);
    const savedRequest = await newRequest.save();
    res.status(201).json(savedRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. GET ALL Route - ایکسپلور پیج کے لیے (یہ لازمی ہے!)
app.get('/api/requests', async (req, res) => {
  try {
    const data = await Request.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 5. GET SINGLE Route - ڈیٹیلز پیج کے لیے
app.get('/api/requests/:id', async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);
    if (!request) return res.status(404).json({ message: "Request not found" });
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ہیلپ کاؤنٹ بڑھانے کے لیے
app.put('/api/requests/help/:id', async (req, res) => {
  try {
    const updatedRequest = await Request.findByIdAndUpdate(
      req.params.id,
      { $inc: { helpers: 1 } }, // اس سے کاؤنٹ ایک نمبر بڑھ جائے گا
      { new: true }
    );
    res.json(updatedRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});