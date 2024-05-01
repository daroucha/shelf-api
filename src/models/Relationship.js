import mongoose from 'mongoose'

const RelationshipSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  targetUser: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  targetTitle: {
    type: mongoose.Schema.Types.UUID,
    ref: 'Title',
  },
  type: {
    type: String,
    enum: ['like', 'follow'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Relationship = mongoose.model('Relationship', RelationshipSchema)

export default Relationship
