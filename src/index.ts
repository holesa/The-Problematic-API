import logger from './app/logger'
import config, { safeConfig } from './config'
import { connectDB }  from './config/db'
import server from './server'
import { connect } from 'http2'

connectDB()

logger.info(safeConfig, 'Loaded config')
server
  .listenAsync(config.server.port)
  .then(() => logger.info(`Server started, port=${config.server.port}`))
  .catch((error: Error) => {
    logger.error('Server failed to start', error)
    process.exit(1)
  })

export default server
