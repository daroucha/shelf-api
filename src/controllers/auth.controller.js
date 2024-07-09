import asyncHandler from '../middleware/async.middleware.js'
import ErrorResponse from '../utils/errorResponse.js'
import User from '../models/User.js'

// @desc    Get current logged in user
// @route   GET /api/v1/auth/me
// @access  Private
export const getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ firebaseUid: req.user.uid })
    .select('_id firebaseUid email name bio location picture status createdAt')
    .populate({
      path: 'userCollection',
      select: '_id name public',
    })

  res.status(200).json({
    success: true,
    data: user,
  })
})

// @desc    Update user details
// @route   PUT /api/v1/auth/updatedetails
// @access  Private
export const updateDetails = asyncHandler(async (req, res, next) => {
  const filter = {
    firebaseUid: req.user.uid,
  }

  const fieldsToUpdate = {
    name: req.body.name,
    bio: req.body.bio,
    location: req.body.location,
    status: req.body.status,
  }

  const user = await User.findOneAndUpdate(filter, fieldsToUpdate, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({
    success: true,
    data: user,
  })
})

// @desc    Update user profile picture
// @route   PUT /api/v1/auth/updateprofilepic
// @access  Private
export const updateProfilePic = asyncHandler(async (req, res, next) => {
  const filter = {
    firebaseUid: req.user.uid,
  }

  const fieldsToUpdate = {
    picture: req.body.picture,
  }

  const user = await User.findOneAndUpdate(filter, fieldsToUpdate, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({
    success: true,
    data: user,
  })
})
