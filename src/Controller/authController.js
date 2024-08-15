const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const { validationResult } = require('express-validator');
const userModel = require('../models/User');


const registerUser = async (req, res) => {
  
  const { name, email, password, role } = req.body;

  try {
    let user = await userModel.findOne({ email,role});
    console.log("user",user);
    
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new userModel({
      name,
      email,
      password,
      role
    });

    await user.save();

    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.status(201).json({ token,message:"user registered successfully" });
        
        
      }
    );
  } catch (error) {
    res.status(500).json({ message: 'something went wrong ', error });
  }
};


const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ token,message:"login successfully" });
      }
    );
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};


const getUser = async (req, res) => {
  
  try {
    
    
    const user = await userModel.find().select('-password');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {registerUser,loginUser,getUser}