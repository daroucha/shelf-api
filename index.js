import app from './src/app.js'
import { connectDB } from './src/config/db.js'

// Connect to database
connectDB(process.env.MONGO_URI)

// Set port
const PORT = process.env.PORT || 8080

const server = app.listen(
  PORT,
  console.log(
    `[ShelfAPI] Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
      .bgWhite.black.bold,
  ),
)

// Handle 'unhandled' promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`[ShelfAPI] Error: ${err.message}`.red.bold)

  // Close server & exit process
  server.close(() => process.exit(1))
})

export default app
