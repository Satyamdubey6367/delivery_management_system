const express = require('express');
const addRoutePage = require('../Controller/routeController');

const router = express.Router();
router.post("/createRoute",addRoutePage.createRoute)
router.get("/getRoute",addRoutePage.getRoutes)
router.delete("/deleteRoute/:id",addRoutePage.deleteRoute)
router.put("/updateRoute/:id",addRoutePage.updateRoute)
router.get("/getRouteById/:id",addRoutePage.getRouteById)





module.exports = router;
