const mongoose = require('mongoose');
const Member = require('./models/Member');
const members = require('./data/members.json');

//Load environment variables first!
require('dotenv').config();

// Then use the connection string
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Member.deleteMany();
    await Member.insertMany(members);
    console.log('Data imported successfully!');
    process.exit();
  })
  .catch(err => {
    console.error('Error during import:', err);
    process.exit(1);
  });

