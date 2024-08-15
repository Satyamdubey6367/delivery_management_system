const express = require('express');
const addOrderPage = require('../Controller/orderController');

const router = express.Router();

router.post("/createOrders",addOrderPage.createOrder)
router.get("/getOrders",addOrderPage.getOrders)
router.delete("/deleteOrders/:id",addOrderPage.deleteOrder)
router.put("/updateOrders/:id",addOrderPage.updateOrder)
router.get("/getOderByID/:id",addOrderPage.getOrderById)





module.exports = router;
