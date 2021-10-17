const { models } = require("../models");

exports.allMessage = async function (req, res) {
  const message = await models.messagesSchema.find();
  res.send(message);
};

exports.messageFromUID = async (req, res) => {
  const messageId = req.params.id;
  const message = await models.messagesSchema.find({
    uidFirebase: messageId,
  });
  try {
    res.send(message);
  } catch (err) {
    res.status(500).send(err);
  }
};
