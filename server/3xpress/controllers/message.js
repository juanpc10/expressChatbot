const messageModel = require('../models/message');

const getMessages = (req, res) => {
  try {
    res.status(200)
    res.send(messageModel.getMessages())
  } catch (e) {
    res.sendStatus(500);
  }
}

const postMessage = (req, res) => {
  try {
    messageModel.postMessage(req.body);
    res.status(201);
    res.send(req.body);
  } catch (e) {
    res.sendStatus(500)
  }
}

module.exports = {
  getMessages,
  postMessage
}