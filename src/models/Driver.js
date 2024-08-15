const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
  driverId:
   {
     type: String,
     unique: true 
    },
  name: 
  { 
    type: String,
     required: true 
    },
  email:
   { 
    type: String,
     required: true,
      unique: true 
    },
  phone: 
  { type: String,
     required: true 
    },
  vehicleType:
   { type: String,
     required: true 
    },
  status:
   { type: String,
     enum: ['active', 'inactive'],
      default: 'active' },
  createdAt: 
  { 
    type: Date, default: Date.now },
  updatedAt:
   { type: Date, default: Date.now }
});

const DriverModel = mongoose.model('Driver', DriverSchema);
module.exports = DriverModel