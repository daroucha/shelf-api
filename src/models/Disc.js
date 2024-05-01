import mongoose from 'mongoose'
import { randomUUID } from 'crypto'

const DiscSchema = new mongoose.Schema({
  title: {
    type: mongoose.Schema.ObjectId,
    ref: 'PublicTitle',
    required: true,
  },
  type: {
    type: String,
    enum: ['bd', 'dvd'],
  },
  video: {
    resolution: String,
    aspect: String,
    color: Boolean,
    duration: Number,
  },
  audio: Array,
  subtitles: Array,
  extras: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Disc = mongoose.model('Disc', DiscSchema)

export default Disc
