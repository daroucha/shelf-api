import mongoose from 'mongoose'
import { randomUUID } from 'crypto'

const TitleSchema = new mongoose.Schema({
  uid: {
    type: 'UUID',
    default: () => randomUUID(),
    unique: true,
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
  pictures: Array,
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  comments: String,
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
  },
  savedAt: {
    type: Date,
    default: Date.now,
  },
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
