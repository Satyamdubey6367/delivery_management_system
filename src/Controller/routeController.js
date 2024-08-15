const routeModel = require('../models/Route');

// Create a new route
const createRoute = async (req, res) => {
  try {

    const { orderId, steps ,status} = req.body;
    function generateRouteId() {
      const now = new Date();
  
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0'); 
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const milliseconds = String(now.getMilliseconds()).padStart(3, '0'); 
  
      const routeId = `order-${year}${month}${day}-${hours}${minutes}${seconds}-${milliseconds}`;
      
      return routeId;
  }
    const newRoute = await routeModel.create({
      orderId,
      steps,
      status,
      routeId:generateRouteId()

    });
    res.status(201).json(newRoute);
  } catch (error) {
    res.status(500).json({ message: 'Error creating route', error });
  }
};

// Get all routes
const getRoutes = async (req, res) => {
  try {
    const routes = await routeModel.find().populate('orderId');
    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching routes', error });
  }
};

// Get a single route by ID
const getRouteById = async (req, res) => {
  try {
    const route = await routeModel.findById(req.params.id).populate('orderId');
    if (!route) return res.status(404).json({ message: 'Route not found' });
    res.status(200).json(route);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching route', error });
  }
};

// Update a route
const updateRoute = async (req, res) => {
  try {
    const route = await routeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!route) return res.status(404).json({ message: 'Route not found' });
    res.status(200).json(route);
  } catch (error) {
    res.status(500).json({ message: 'Error updating route', error });
  }
};

// Delete a route
const deleteRoute = async (req, res) => {
  try {
    const route = await routeModel.findByIdAndDelete(req.params.id);
    if (!route) return res.status(404).json({ message: 'Route not found' });
    res.status(200).json({ message: 'Route deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting route', error });
  }
};

module.exports ={createRoute,getRoutes,getRouteById,updateRoute,deleteRoute}