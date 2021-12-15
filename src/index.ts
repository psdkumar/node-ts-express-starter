import express from 'express'

import { sampleRouter } from './sample'

const app = express()

const port = process.env.SERVER_PORT ?? 3000

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// API's
app.get('/', (_, res) => {
  return res.status(200).json({ data: 'Hello World' })
})

// Routers
app.use('/sample', sampleRouter)

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
