import {
  createRouter,
  createServer,
  defaultFinalHandler,
  defaultRootHandler,
  jsonParser,
} from 'unicore'
import healthz from '../app/controllers/healthz'
import httpErrorResponder from '../app/controllers/httpErrorResponder'
import apiRoutes from '../app/routes/apiRoutes'
import problemsRoutes from '../app/routes/problemsRoutes'

export default (app: ReturnType<typeof createServer>) => {
  const router = createRouter()
  router.all('/', defaultRootHandler)
  router.use(healthz)

  router.use('/api', jsonParser(), apiRoutes)
  router.use('/api/problems', jsonParser(), problemsRoutes)

  router.use(httpErrorResponder)
  router.use(defaultFinalHandler)
  app.use(router)
}
