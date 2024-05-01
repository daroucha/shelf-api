import mongoose from 'mongoose'

const PublicTitleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [80, 'Name can not be more than 80 characters'],
  },
  year: Date,
  country: String,
  type: {
    type: String,
    enum: ['movie', 'collection'],
  },
  box: {
    type: String,
    enum: [
      'amaray',
      'slim',
      'scanavo',
      'digipak',
      'digiduplo',
      'digibook',
      'elite',
    ],
  },
  discs: {
    type: mongoose.Schema.ObjectId,
    ref: 'Disc',
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

const PublicTitle = mongoose.model('PublicTitle', PublicTitleSchema)

export default PublicTitle
