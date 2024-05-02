import mongoose from 'mongoose'

const FavoriteSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: mongoose.Schema.Types.UUID,
    ref: 'Title',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Favorite = mongoose.model('Favorite', FavoriteSchema)

export default Favorite
