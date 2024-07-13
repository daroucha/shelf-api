import axios from 'axios'
import asyncHandler from '../middleware/async.middleware.js'
import PublicTitle from '../models/PublicTitle.js'
import Title from '../models/Title.js'
import User from '../models/User.js'
import ErrorResponse from '../utils/errorResponse.js'

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

  const { name, year, country, userCollection } = req.body

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
    userCollection,
  })

  res.status(201).json({
    success: true,
    data: title,
  })
})

// @desc    Update a title
// @route   PUT /api/v1/titles/:id
// @access  Private
export const updateTitle = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({
    firebaseUid: req.user.uid,
  })

  let publicTitle = await PublicTitle.findById(req.params.id)

  if (!publicTitle) {
    return next(
      new ErrorResponse(`Title not found width id of ${req.params.id}`, 404),
    )
  }

  if (publicTitle.createdBy.toString() !== user.id) {
    return next(
      new ErrorResponse(`You don't have permission to update this title`, 401),
    )
  }

  const { name, year, country, type, cover, box, discs } = req.body

  publicTitle = await PublicTitle.findByIdAndUpdate(
    req.params.id,
    {
      name,
      year,
      country,
      type,
      cover,
      box,
      discs,
    },
    {
      new: true,
      runValidators: true,
    },
  )

  res.status(200).json({
    success: true,
    data: publicTitle,
  })
})

// @desc    Search a movie by title from OMDB
// @route   GET /api/v1/titles/movie
// @access  Private
export const getMovieData = asyncHandler(async (req, res, next) => {
  const apiKey = process.env.OMDB_KEY

  const { title } = req.query

  const { data: movie } = await axios.get(
    `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}&type=movie`,
  )

  if (movie.Response === 'False') {
    return next(new ErrorResponse(movie.Error, 404))
  }

  res.status(200).json({
    success: true,
    data: movie.Search,
  })
})
