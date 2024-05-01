// @desc    Logs request to console
const logger = (req, res, next) => {
  console.log(
    `[ShelfAPI] [${req.method}] ${
      req.protocol
    }://${req.get('host')}${req.originalUrl}`,
  )
  next()
}

export default logger
