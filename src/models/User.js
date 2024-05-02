import mongoose from 'mongoose'
import { randomUUID } from 'crypto'

const UserSchema = new mongoose.Schema({
  uid: {
    type: 'UUID',
    default: () => randomUUID(),
    unique: true,
  },
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
  status: {
    type: String,
    default: 'off',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const User = mongoose.model('User', UserSchema)

export default User
