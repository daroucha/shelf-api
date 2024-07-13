import asyncHandler from '../middleware/async.middleware.js'
import Disc from '../models/Disc.js'
import PublicTitle from '../models/PublicTitle.js'
import ErrorResponse from '../utils/errorResponse.js'

// @desc    Create new disc
// @route   POST /api/v1/discs
// @access  Private
export const createDisc = asyncHandler(async (req, res, next) => {
  const title = req.body.title

  const publicTitle = await PublicTitle.findById(title)

  if (!publicTitle) {
    return next(new ErrorResponse('Title not found', 404))
  }

  const disc = await Disc.create({
    ...req.body,
  })

  await publicTitle.discs.push(disc)
  await publicTitle.save()

  res.status(200).json({
    success: true,
    data: disc,
  })
})
