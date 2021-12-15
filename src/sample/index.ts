import express from 'express'

const router = express.Router()

// Sample API's
router.get('', (_, res) => {
  return res.status(200).json({ data: 'Sample Data' })
})

export { router as sampleRouter }
