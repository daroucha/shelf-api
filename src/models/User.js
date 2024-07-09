import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  firebaseUid: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    required: [true, 'Please add a email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  picture: String,
  bio: String,
  location: String,
  userCollection: {
    type: Schema.Types.ObjectId,
    ref: 'UserCollection',
  },
  status: {
    type: String,
    default: 'off',
    enum: ['off', 'on'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const User = mongoose.model('User', UserSchema)

export default User
