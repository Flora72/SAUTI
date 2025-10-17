const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


require('dotenv').config();
const connectDB = require('./backend/config/db');
connectDB();
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/stories', require('./backend/routes/stories'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
console.log('MONGO_URI:', process.env.MONGO_URI);
