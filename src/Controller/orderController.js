const orderModel = require('../models/Order')

const createOrder = async (req, res) => {
  try {
    const { customerName, deliveryAddress,orderStatus, totalAmount } = req.body;
    console.log("order created", customerName, deliveryAddress,orderStatus, totalAmount );
    function generateOrderId() {
      const now = new Date();
  
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0'); 
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const milliseconds = String(now.getMilliseconds()).padStart(3, '0'); 
  
      const orderId = `order-${year}${month}${day}-${hours}${minutes}${seconds}-${milliseconds}`;
      
      return orderId;
  }
  
  
  
    
   
    console.log("id generate",generateOrderId());
    
    const newOrder = await orderModel.create({
      customerName,
      deliveryAddress,
      orderStatus,
      totalAmount,
      orderId:generateOrderId() 
    });
    console.log("new order",newOrder);
    
    res.status(201).json(newOrder);
     
    
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error });
  }
};

 const getOrders = async (req, res) => {
  try {
    const orders = await orderModel.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
};

  const getOrderById = async (req, res) => {
  try {
    const order = await orderModel.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order', error });
  }
};

const updateOrder = async (req, res) => {
  try {
    const order = await orderModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error updating order', error });
  }
};

 const deleteOrder = async (req, res) => {
  try {
    const order = await orderModel.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json({ message: 'Order deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting order', error });
  }
};

module.exports ={createOrder,getOrders,getOrderById,updateOrder,deleteOrder}