const express = require('express');
const addDrivePage = require('../Controller/driverController');

const router = express.Router();

router.post("/createDrivers",addDrivePage.createDriver)
router.get("/getDrivers",addDrivePage.getDrivers)
router.delete("/deleteDrivers/:id",addDrivePage.deleteDriver)
router.put("/updateDrivers/:id",addDrivePage.updateDriver)
router.get("/getDriversById/:id",addDrivePage.getDriverById)

module.exports = router;
