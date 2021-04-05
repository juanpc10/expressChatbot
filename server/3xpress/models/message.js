const db = require('../db.js');

const getMessages = () => db.messages;
const postMessage = (message) => db.messages.push(message);

module.exports = {
  getMessages,
  postMessage
}