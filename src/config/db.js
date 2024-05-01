import mongoose from 'mongoose'

export const connectDB = async (mongoURI) => {
  try {
    const conn = await mongoose.connect(mongoURI)

    console.log(
      `[ShelfAPI] MongoDB Connected: ${conn.connection.host}`.bold.blue,
    )
  } catch (err) {
    console.error('[ShelfAPI] Error connecting to MongoDB:', err.message)
    process.exit(1)
  }
}

export const disconnectDB = async () => {
  try {
    await mongoose.disconnect()
    console.log('[ShelfAPI] MongoDB Disconnected'.bold.blue)
  } catch (err) {
    console.error('[ShelfAPI] Error disconnecting from MongoDB:', err.message)
    process.exit(1)
  }
}
