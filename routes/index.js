const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mini Quadro de Mensagens",
    messages: messages.sort((a, b) => b.added - a.added),
  });
});

router.post("/new", function (req, res, next) {
  const { user, text } = req.body;
  messages.push({
    text: text,
    user: user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
