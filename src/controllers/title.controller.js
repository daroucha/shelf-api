import asyncHandler from '../middleware/async.middleware.js'
import PublicTitle from '../models/PublicTitle.js'
import Title from '../models/Title.js'
import User from '../models/User.js'

// @desc    Get all titles
// @route   GET /api/v1/titles
// @access  Private
export const getTitles = asyncHandler(async (req, res, next) => {})

// @desc    Create a new draft Title
// @route   POST /api/v1/titles/draft
// @access  Private
export const createDraftTitle = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({
    firebaseUid: req.user.uid,
  })

  const { name, year, country } = req.body

  let publicTitle = await PublicTitle.findOne({
    name,
    year,
    country,
  })

  if (!publicTitle) {
    publicTitle = await PublicTitle.create({
      name,
      year,
      country,
      createdBy: user,
    })
  }

  const title = await Title.create({
    title: publicTitle,
    status: 'draft',
    owner: user,
    createdBy: user,
  })

  res.status(201).json({
    success: true,
    data: title,
  })
})
