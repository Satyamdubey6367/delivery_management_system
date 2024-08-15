const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const OrderSchema = new mongoose.Schema({
  orderId: 
  {
     type: String, 
    unique: true 
  },
  customerName: 
  { type: String,
     required: true
     },
  deliveryAddress: 
  { type: String,
     required: true 
    },
  orderStatus: 
  { type: String, 
    enum: ['pending', 'dispatched', 'delivered', 'canceled'],
     default: 'pending' },
  totalAmount: 
  { type: Number,
     required: true 
    },
  createdAt:
   { type: Date, default: Date.now 

   },
  updatedAt: {
     type: Date, default: Date.now
     }
});

const orderModel = mongoose.model('Order', OrderSchema);

module.exports= orderModel