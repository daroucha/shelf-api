import {
  getMe,
  updateDetails,
  updateProfilePic,
} from '../controllers/auth.controller.js'
import { protect } from '../middleware/auth.middleware.js'
import express from 'express'

const router = express.Router()

router.get('/me', protect, getMe)
router.put('/updateprofilepic', protect, updateProfilePic)
router.put('/updatedetails', protect, updateDetails)

export default router
