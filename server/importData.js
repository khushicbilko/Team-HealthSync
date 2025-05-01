const mongoose = require('mongoose');
const Member = require('./models/Member');
const members = require('./data/members.json');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log(' MongoDB connected. Starting import...');

  await Member.deleteMany(); // Optional: Clears existing data
  await Member.insertMany(members);

  console.log(' Member data imported successfully!');
  process.exit();
})
.catch((err) => {
  console.error('Error during import:', err);
  process.exit(1);
});

