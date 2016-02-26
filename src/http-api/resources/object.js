const ipfs = require('./../index.js').ipfs
const boom = require('boom')

exports = module.exports

exports.new = (request, reply) => {
  // request.template
  ipfs.object.new(template, (err, object) => {
   if (err) { return reply(boom.badRequest(err)) }
   return reply(object)
  })
}

exports.patch = {
  appendData: (request, reply) => {
    // request.multihash
    // request.data
    ipfs.object.patch.appendData(multihash, data, (err, object) => {
     if (err) { return reply(boom.badRequest(err)) }
     return reply(object)
    })
  },
  addLink: (request, reply) => {
    // request.multihash
    // request.link
    ipfs.object.patch.addLink(multihash, link, (err, object) => {
     if (err) { return reply(boom.badRequest(err)) }
     return reply(object)
    })
  },
  rmLink: (request, reply) => {
    // request.multihash
    // request.multihashlink
    ipfs.object.patch.rmLink(multihash, multihashlink, (err, object) => {
     if (err) { return reply(boom.badRequest(err)) }
     return reply(object)
    })
  },
  setData: (request, reply) => {
    // request.multihash
    // request.data
    ipfs.object.patch.setData(multihash, data, (err, object) => {
     if (err) { return reply(boom.badRequest(err)) }
     return reply(object)
    })
  }
}

exports.data = (request, reply) => {
  // request.multihash
  ipfs.object.data(multihash, (err, object) => {
   if (err) { return reply(boom.badRequest(err)) }
   return reply(object)
  })
}

exports.links = (request, reply) => {
  // request.multihash
  ipfs.object.links(multihash, (err, object) => {
   if (err) { return reply(boom.badRequest(err)) }
   return reply(object)
  })
}

exports.get = (request, reply) => {
  // request.multihash
  // request.options
  ipfs.object.get(multihash, options, (err, object) => {
   if (err) { return reply(boom.badRequest(err)) }
   return reply(object)
  })
}

exports.put = (request, reply) => {
  // request.dagNode
  // request.options
  ipfs.object.put(dagNode, options, (err, object) => {
   if (err) { return reply(boom.badRequest(err)) }
   return reply(object)
  })
}

exports.stat = (request, reply) => {
  // request.multihash
  // request.options
  ipfs.object.stat(multihash, options, (err, object) => {
   if (err) { return reply(boom.badRequest(err)) }
   return reply(object)
  })
}