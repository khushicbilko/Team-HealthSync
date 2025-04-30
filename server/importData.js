const mongoose = require('mongoose');
const Member = require('./models/Member');
const members = require('./data/members.json');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    await Member.deleteMany();
    await Member.insertMany(members);
    console.log('✅ Data Imported!');
    process.exit();
  })
  .catch(err => {
    console.error('❌ Import Failed:', err);
    process.exit(1);
  });
