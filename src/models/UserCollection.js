import mongoose, { Schema } from 'mongoose'

const UserCollectionSchema = new mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [80, 'Name can not be more than 80 characters'],
  },
  titles: {
    type: Schema.Types.ObjectId,
    ref: 'Title',
  },
  public: Boolean,
  about: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const UserCollection = mongoose.model('UserCollection', UserCollectionSchema)

export default UserCollection
