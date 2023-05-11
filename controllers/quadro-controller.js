const Mensagem = require("../models/mensagem");

const quadro_index = (req, res, next) => {
  Mensagem.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", {
        title: "Mini Quadro de Mensagens",
        messages: result,
      });
    });
};

const quadro_cria_post = (req, res, next) => {
  const msg = new Mensagem(req.body);
  msg
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  quadro_index,
  quadro_cria_post,
};
