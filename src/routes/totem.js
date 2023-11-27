var express = require('express');
var router = express.Router();

var totemController = require("../controllers/totemController");


router.post("/cadastrar", function (req, res) {
    totemController.cadastrar(req, res);
});

router.post("/metricas", function (req, res) {
    totemController.metricaTotem(req, res);
});

router.get("/listar", function (req, res) {
    totemController.listarTotem(req, res);
});
router.get("/dadosAtual", function (req, res) {
    totemController.listarDadosTotemAtual(req, res);
});

router.put("/editar/:id", function (req, res) {
    totemController.editarTotem(req, res);
});

router.delete("/delete/:id", function (req, res) {
    totemController.deletarTotem(req, res);
});


module.exports = router;