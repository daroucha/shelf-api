import express from 'express'
import { protect } from '../middleware/auth.middleware.js'
import { createDisc } from '../controllers/disc.controller.js'

const router = express.Router()

router.post('/', protect, createDisc)

export default router
