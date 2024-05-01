import mongoose from 'mongoose'

const WishlistSchema = new mongoose.Schema({
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

const Wishlist = mongoose.model('Wishlist', WishlistSchema)

export default Wishlist
