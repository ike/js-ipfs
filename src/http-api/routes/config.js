const api = require('./../index.js').server.select('API')
const resources = require('./../resources')

api.route({
  method: ['GET', 'POST'],
  path: '/api/v0/config/{key?}',
  config: {
    pre: [
      { method: resources.config.show.parseArgs, assign: 'args' }
    ],
    handler: resources.config.show.handler
  }
})
