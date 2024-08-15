const express = require('express')

const mongoose = require("mongoose")
const orderRoutes = require('./src/routes/orderRoutes')
const driverRoutes = require('./src/routes/driverRoutes')
const routeRoutes = require('./src/routes/routeRoutes')
const authRoutes = require('./src/routes/authRoutes')
const bodyParser = require('body-parser')

const dotenv = require('dotenv');

dotenv.config();



const port =3001
const app = express()





mongoose.connect(process.env.DB_URL,
   ).then((res)=>{
     console.log(" database connected")
}).catch((err)=>{   
    console.log(err)
})

// import models  

const DriverModel = require('./src/models/Driver')
const orderModel = require('./src/models/Order')
const routeModel = require('./src/models/Route')
const userModel = require('./src/models/User')

// import controller

const {registerUser,loginUser,getUser} = require('./src/Controller/authController')
const {createDriver,getDrivers,getDriverById,updateDriver,deleteDriver} = require('./src/Controller/driverController')
const {createOrder,getOrders,getOrderById,updateOrder,deleteOrder}  = require('./src/Controller/orderController')
const {createRoute,getRoutes,getRouteById,updateRoute,deleteRoute} = require ('./src/Controller/routeController')

app.use(express.json()); 
app.use(bodyParser.json())






app.use('/api/orders',orderRoutes)
app.use('/api/drivers',driverRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/route',routeRoutes)


//  Server -------------------------------@@@@@@@@@@@@@@@@
 
 app.listen(3001,(error)=>{
    if(error)
    {
        console.log("something is wrong")
    }

    console.log(`server is running on port ${port}`)
})
