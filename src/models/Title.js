import mongoose from 'mongoose'
import { randomUUID } from 'crypto'

const TitleSchema = new mongoose.Schema({
  uid: {
    type: 'UUID',
    default: () => randomUUID(),
  },
  title: {
    type: mongoose.Schema.ObjectId,
    ref: 'PublicTitle',
    required: true,
  },
  cover: {
    type: mongoose.Schema.Types.UUID,
    ref: 'Cover',
  },
  banner: {
    type: mongoose.Schema.Types.UUID,
    ref: 'Cover',
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  comments: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
})

const Title = mongoose.model('Title', TitleSchema)

export default Title
