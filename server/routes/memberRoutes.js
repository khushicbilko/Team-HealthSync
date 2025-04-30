const express = require('express');
const router = express.Router();
const multer = require('multer');
const Member = require('../models/Member');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// POST - Add new member
router.post('/', upload.single('image'), async (req, res) => {
  const {
    name,
    rollNumber,
    year,
    degree,
    email,
    project,
    hobbies,
    certificate,
    internship,
    aim
  } = req.body;

  const image = req.file?.filename;

  try {
    const newMember = new Member({
      name,
      rollNumber,
      year,
      degree,
      email,
      project,
      hobbies,
      certificate,
      internship,
      aim,
      image
    });

    await newMember.save();
    res.status(201).json(newMember);
  } catch (err) {
    console.error('Error saving member:', err);
    res.status(500).json({ error: err.message });
  }
});

// GET all members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET member by ID
router.get('/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
