import express from 'express'
import cors from 'cors'
import { env } from './config/env.js'
import { apiRouter } from './routes/index.js'

const app = express()

app.use(
  cors({
    origin: env.clientUrl,
  }),
)
app.use(express.json())

app.use('/api', apiRouter)

app.use((req, res) => {
  res.status(404).json({
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  })
})

export { app }
