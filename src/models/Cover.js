import mongoose from 'mongoose'
import { randomUUID } from 'crypto'

const CoverSchema = new mongoose.Schema({
  uid: {
    type: 'UUID',
    default: () => randomUUID(),
    unique: true,
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  title: {
    type: mongoose.Schema.Types.UUID,
    ref: 'Title',
  },
  image: String,
  type: {
    type: String,
    enum: ['cover', 'banner'],
  },
  properties: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Cover = mongoose.model('Cover', CoverSchema)

export default Cover
