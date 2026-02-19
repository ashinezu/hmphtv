import { Router } from 'express'
import { featuredStreams } from '../data/mockData.js'

const streamsRouter = Router()

streamsRouter.get('/', (_req, res) => {
  res.json({ data: featuredStreams })
})

streamsRouter.get('/live', (_req, res) => {
  const liveStreams = featuredStreams.filter((stream) => stream.isLive)
  res.json({ data: liveStreams })
})

export { streamsRouter }
