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

const quadro_index = (req, res, next) => {
  res.render("index", {
    title: "Mini Quadro de Mensagens",
    messages: messages.sort((a, b) => b.added - a.added),
  });
};

const quadro_cria_post = (req, res, next) => {
  const { user, text } = req.body;
  messages.push({
    text: text,
    user: user,
    added: new Date(),
  });
  res.redirect("/");
};

module.exports = {
  quadro_index,
  quadro_cria_post,
};
