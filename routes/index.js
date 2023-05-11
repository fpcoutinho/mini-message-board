const express = require("express");
const quadroController = require("../controllers/quadro-controller");

const router = express.Router();

// Rotas
router.get("/", quadroController.quadro_index);

router.post("/new", quadroController.quadro_cria_post);

module.exports = router;
