const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./backend/config/db');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/stories', require('./backend/routes/stories'));
app.use('/api/auth', require('./backend/routes/auth')); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
