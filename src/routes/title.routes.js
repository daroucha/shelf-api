import express from 'express'
import {
  createDraftTitle,
  getMovieData,
  updateTitle,
} from '../controllers/title.controller.js'
import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()

router.get('/movie', protect, getMovieData)
router.post('/draft', protect, createDraftTitle)
router.put('/:id', protect, updateTitle)

export default router
