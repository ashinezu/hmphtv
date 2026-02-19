import { Router } from 'express'
import { schedule } from '../data/mockData.js'

const scheduleRouter = Router()

scheduleRouter.get('/', (_req, res) => {
  res.json({ data: schedule })
})

export { scheduleRouter }
