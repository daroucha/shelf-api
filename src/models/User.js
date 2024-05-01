import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
  },
  picture: String,
  bio: String,
  location: String,
  status: {
    type: String,
    default: 'off',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
})

const User = mongoose.model('User', UserSchema)

export default User
