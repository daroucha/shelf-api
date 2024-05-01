import asyncHandler from './async.middleware.js'
import ErrorResponse from '../utils/errorResponse.js'
import { admin } from '../config/firebase.js'

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
    return next(new ErrorResponse('Not authorized to access this route', 401))
  }

  try {
    // Verify token
    const decoded = admin.auth().verifyIdToken(token)

    next()
  } catch (err) {
    return next(new ErrorResponse('Not authorized to access this route', 401))
  }
})
