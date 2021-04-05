const express = require('express');
const messageController = require('../controllers/message');
const router = express.Router();

router.get('/messages', messageController.getMessages);
router.post('/messages', messageController.postMessage);

module.exports = router;