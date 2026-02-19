import { Router } from 'express'
import { healthRouter } from './health.routes.js'
import { streamsRouter } from './streams.routes.js'
import { scheduleRouter } from './schedule.routes.js'

const apiRouter = Router()

apiRouter.use('/health', healthRouter)
apiRouter.use('/streams', streamsRouter)
apiRouter.use('/schedule', scheduleRouter)

export { apiRouter }
