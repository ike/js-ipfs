const api = require('./../index.js').server.select('API')
const resources = require('./../resources')

// TODO

api.route({
  method: 'GET',
  path: '/api/v0/object',
  handler: resources.object
})

api.route({
  method: 'GET',
  path: '/api/v0/object/new',
  handler: resources.object.new
})

api.route({
  method: 'GET',
  path: '/api/v0/object/data',
  handler: resources.object.data
})

api.route({
  method: 'GET',
  path: '/api/v0/object/data/append',
  handler: resources.object.patch.appendData
})

api.route({
  method: 'GET',
  path: '/api/v0/object/data/set',
  handler: resources.object.patch.setData
})

api.route({
  method: 'GET',
  path: '/api/v0/object/links',
  handler: resources.object.links
})

api.route({
  method: 'GET',
  path: '/api/v0/object/links/add',
  handler: resources.object.patch.addLink
})

api.route({
  method: 'GET',
  path: '/api/v0/object/links/rm',
  handler: resources.object.patch.rmLink
})

api.route({
  method: 'GET',
  path: '/api/v0/object/data/put',
  handler: resources.object.put
})

api.route({
  method: 'GET',
  path: '/api/v0/object/data/stat',
  handler: resources.object.stat
})