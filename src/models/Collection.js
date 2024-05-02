import mongoose from 'mongoose'
import { randomUUID } from 'crypto'

const CollectionSchema = new mongoose.Schema({
  uid: {
    type: 'UUID',
    default: () => randomUUID(),
    unique: true,
  },
  owner: {
    type: mongoose.Schema.Types.UUID,
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
    type: mongoose.Schema.Types.UUID,
    ref: 'Title',
  },
  public: Boolean,
  about: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Collection = mongoose.model('Collection', CollectionSchema)

export default Collection
