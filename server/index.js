const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
const memberRoutes = require('./routes/memberRoutes');

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI)


app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 
app.use('/api/members', memberRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/teamDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

app.listen(5000, () => console.log("Server started on port 5000"));
