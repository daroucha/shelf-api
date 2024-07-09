import express from 'express'
import { createDraftTitle } from '../controllers/title.controller.js'
import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()

router.post('/draft', protect, createDraftTitle)

export default router
