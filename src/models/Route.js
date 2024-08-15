const mongoose = require('mongoose');


const RouteSchema = new mongoose.Schema({
  routeId: 
  { type: String},
  orderId:
   { type: mongoose.Schema.Types.ObjectId, ref: 'Order',
     required: true
     },
  steps: [
    {
      location: { type: String, required: true },
      timestamp: { type: Date, required: true },
    },
  ],
  status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const routeModel = mongoose.model('Route', RouteSchema);
module.exports = routeModel