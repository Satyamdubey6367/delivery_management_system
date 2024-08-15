const DriverModel = require('../models/Driver');

const createDriver = async (req, res) => {
  try {
    const { name, email, phone, vehicleType,status } = req.body;
    function generateDriverId() {
      const now = new Date();
  
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0'); 
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const milliseconds = String(now.getMilliseconds()).padStart(3, '0'); 
  
      const driverId = `order-${year}${month}${day}-${hours}${minutes}${seconds}-${milliseconds}`;
      
      return driverId;
  }
  
    const newDriver = await DriverModel.create({
      name,
      email,
      phone,
      vehicleType,
      status,
      driverId:generateDriverId()

    });
    res.status(201).json(newDriver);
  } catch (error) {
    res.status(500).json({ message: 'Error creating driver', error });
  }
};

const getDrivers = async (req, res) => {
  try {
    const drivers = await DriverModel.find();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching drivers', error });
  }
};


const getDriverById = async (req, res) => {
  try {
    const driver = await DriverModel.findById(req.params.id);
    if (!driver) return res.status(404).json({ message: 'Driver not found' });
    res.status(200).json(driver);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching driver', error });
  }
};


const updateDriver = async (req, res) => {
  try {
    const driver = await DriverModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!driver) return res.status(404).json({ message: 'Driver not found' });
    res.status(200).json(driver);
  } catch (error) {
    res.status(500).json({ message: 'Error updating driver', error });
  }
};


 const deleteDriver = async (req, res) => {
  try {
    const driver = await DriverModel.findByIdAndDelete(req.params.id);
    if (!driver) return res.status(404).json({ message: 'Driver not found' });
    res.status(200).json({ message: 'Driver deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting driver', error });
  }
};

module.exports = {createDriver,getDrivers,getDriverById,updateDriver,deleteDriver}