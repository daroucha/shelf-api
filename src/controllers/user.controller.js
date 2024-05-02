import User from '../models/User.js'
import asyncHandler from '../middleware/async.middleware.js'

// @desc    Register a user
// @route   POST /api/v1/users
// @access  Public
export const registerUser = asyncHandler(async (req, res, next) => {
  const { firebaseUid, name, email, picture, status } = req.body

  // Create our user
  const user = await User.create({
    firebaseUid,
    name,
    email,
    picture,
    status,
  })

  res.status(201).json({
    success: true,
    data: user,
  })
})
