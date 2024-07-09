import mongoose from 'mongoose'

const TitleSchema = new mongoose.Schema({
  title: {
    type: mongoose.Schema.ObjectId,
    ref: 'PublicTitle',
    required: true,
    unique: true,
  },
  cover: {
    type: mongoose.Schema.ObjectId,
    ref: 'Cover',
  },
  banner: {
    type: mongoose.Schema.ObjectId,
    ref: 'Cover',
  },
  pictures: Array,
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  userCollection: {
    type: mongoose.Schema.ObjectId,
    ref: 'UserCollection',
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
