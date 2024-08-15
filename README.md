# delivery_management_system
This is a Delivery Management System built using Node.js, Express.js, and MongoDB. The system provides functionalities for user authentication, order management, driver management, and data validation with error handling.

Features
User Authentication and Authorization:

JWT-based authentication.
Role-based access control (Admin, Driver, User).
Order Management:

CRUD operations for managing orders.
Auto-generated orderId for each order.
Driver Management:

CRUD operations for managing drivers.
Auto-generated driverId for each driver.
Data Validation and Error Handling:

Input validation before saving to the database.
Proper error handling with meaningful messages.
Prerequisites
Node.js v14+
MongoDB v4+
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/delivery-management-system.git
cd delivery-management-system
Install dependencies:

bash
Copy code
npm install
Set up environment variables:
Create a .env file in the root directory and add the following:

bash
Copy code
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_uri
Run the application:

bash
Copy code
npm start
Run tests:

bash
Copy code
npm test
API Documentation
API documentation is available through Swagger UI. To access the documentation:

Run the application.
Open your browser and navigate to http://localhost:3001/api-docs.
Project Structure
bash
Copy code
.
├── models
│   ├── Order.js
│   ├── Driver.js
│   └── auth.js
    └── route.js
├── routes
│   ├── orderRoutes.js
│   ├── driverRoutes.js
│   └── authRoutes.js
|   └── routeRoutes.js
├── controllers
│   ├── orderController.js
│   ├── driverController.js
│   └── authController.js
|   └── routeController.js
├── .env
└── README.md
Endpoints

User Routes

POST /api/auth/register - Register a new user
POST /api/auth/login - Login a user
GET /api/auth//getUser - Get all users 

Order Routes

POST /createorders - Create a new order
GET /api/orders/getOrders - Get all orders
GET /api/orders//getOderByID/
- Get order by ID
PUT /api/orders/updateOrders/
- Update order by ID
DELETE /api/orders/deleteOrders/
- Delete order by ID
- 
Driver Routes

POST /api/drivers/createDrivers - Create a new driver
GET /api/drivers//getDrivers - Get all drivers
GET /api/drivers/getDriversById/
PUT /api/drivers/updateDrivers/
DELETE /api/drivers/deleteDrivers

Route Routes

POST /api/route/createRoute - Create a new driver
GET /api/route/getRoute) - Get all drivers
GET /api/route/getRouteById/
PUT /api/route/updateRoute/
DELETE /api/route/deleteRoute/
Error Handling
All endpoints include error handling with meaningful messages returned in the JSON response.


Authentication & Authorization
The JWT token should be included in the Authorization header for protected routes:

makefile
Copy code
Authorization: Bearer <token>
Example API Calls
Register User:
POST /register
Request body: { "name": "", "email": "", "password": "", "role": "" }
Login User:
POST /login
Request body: { "email": "", "": "" }
Get All Orders (Admin,user,driver):
GET /orders
Requires JWT token in the Authorization header.











