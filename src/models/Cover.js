import mongoose from 'mongoose'

const CoverSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  title: {
    type: mongoose.Schema.ObjectId,
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
