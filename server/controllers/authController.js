// server/controllers/authController.js
import User from '../models/User.js';
import Usage from '../models/Usage.js';
import generateToken from '../utils/generateToken.js';

// @desc    Register a new user (Student)
// @route   POST /api/auth/register
export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, classLevel } = req.body;

    // 1. Check if all required fields are provided
    if (!name || !email || !password || !classLevel) {
      res.status(400);
      throw new Error('Please add all fields');
    }

    // 2. Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }

    // 3. Create the user
    const user = await User.create({
      name,
      email,
      password,
      classLevel,
    });

    if (user) {
      // 4. Initialize their usage tracker for the current month
      const currentMonth = new Date().getMonth() + 1;
      const currentYear = new Date().getFullYear();
      
      await Usage.create({
        user: user._id,
        month: currentMonth,
        year: currentYear,
        topicCount: 0 // Starts at 0 free topics used
      });

      // 5. Send back user data + token
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        classLevel: user.classLevel,
        subscriptionType: user.subscriptionType,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  } catch (error) {
    next(error); // Passes error to the custom error handler in server.js
  }
};

// @desc    Authenticate a user (Login)
// @route   POST /api/auth/login
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1. Find the user by email
    const user = await User.findOne({ email });

    // 2. Check if user exists AND password matches
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        classLevel: user.classLevel,
        subscriptionType: user.subscriptionType,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error('Invalid email or password');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req, res) => {
  res.json(req.user);
};
