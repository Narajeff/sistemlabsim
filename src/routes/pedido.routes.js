const express = require("express");
const router = express.Router();
//const Pedidos = require("../models/Pedidos");
// Controller
const {
    renderPedidoForm,
    createNewPedido,
    renderPedidos,
    renderEditPedidoForm,
    updatePedido,
    deletePedido
} = require("../controllers/pedidos.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

// New Pedido
router.get("/pedidos/add", isAuthenticated, renderPedidoForm);

router.post("/pedidos/new-pedido", isAuthenticated, createNewPedido);

// Get All Pedidos
router.get("/pedidos/insumos-pedidos", isAuthenticated, renderPedidos);

// Edit Notes
//router.get("/pedido/edit/:id", isAuthenticated, renderEditPedidoForm);

//router.put("/pedido/edit-pedido/:id", isAuthenticated, updatePedido);

// Delete Notes
//router.delete("/pedido/delete/:id", isAuthenticated, deletePedido);


module.exports = router;