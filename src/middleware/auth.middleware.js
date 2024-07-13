import admin from '../config/firebase.js'
import asyncHandler from './async.middleware.js'
import ErrorResponse from '../utils/errorResponse.js'

export const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(' ')[1]
  }

  // Make sure token exists
  if (!token) {
    return next(new ErrorResponse('You need to authenticate', 401))
  }

  try {
    // Verify token
    const decoded = await admin.auth().verifyIdToken(token)

    req.user = decoded

    next()
  } catch (err) {
    return next(new ErrorResponse('Not authorized to access this route', 401))
  }
})
