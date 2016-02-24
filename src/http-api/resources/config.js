const IPFS = require('../../ipfs-core')
const debug = require('debug')
const get = require('lodash.get')
const set = require('lodash.set')
const log = debug('http-api:config')
log.error = debug('http-api:config:error')

exports = module.exports

exports.show = {
  parseArgs: (request, reply) => {
    const parseValue = (args) => {
      if (request.query.bool !== undefined) {
        args.value = args.value === 'true'
      } else if (request.query.json !== undefined) {
        try {
          args.value = JSON.parse(args.value)
        } catch (err) {
          log.error(err)
          return reply({
            Message: 'failed to unmarshal json. ' + err,
            Code: 0
          }).code(500).takeover()
        }
      }

      return reply(args)
    }

    if (request.query.arg instanceof Array) {
      return parseValue({
        key: request.query.arg[0],
        value: request.query.arg[1]
      })
    }

    if (request.params.key) {
      return parseValue({
        key: request.params.key,
        value: request.query.arg
      })
    }

    if (!request.query.arg) {
      return reply("Argument 'key' is required").code(400).takeover()
    }

    return reply({
      key: request.query.arg
    })
  },

  handler: (request, reply) => {
    const node = new IPFS()
    const key = request.pre.args.key
    const value = request.pre.args.value

    if (value === undefined) {
      // Get the value of a given key
      return node.config.show((err, config) => {
        if (err) {
          log.error(err)
          return reply({
            Message: 'Failed to get config value: ' + err,
            Code: 0
          }).code(500)
        }

        const value = get(config, key)
        if (value === undefined) {
          return reply({
            Message: 'Failed to get config value:  key has no attributes',
            Code: 0
          }).code(500)
        }

        return reply({
          Key: key,
          Value: value
        })
      })
    } else {
      // Set the new value of a given key
      node.config.show((err, originalConfig) => {
        if (err) {
          log.error(err)
          return reply({
            Message: 'Failed to get config value: ' + err,
            Code: 0
          }).code(500)
        }

        const updatedConfig = set(originalConfig, key, value)
        node.config.replace(updatedConfig, (err) => {
          if (err) {
            log.error(err)
            return reply({
              Message: 'Failed to get config value: ' + err,
              Code: 0
            }).code(500)
          }

          return reply({
            Key: key,
            Value: value
          })
        })
      })
    }
  }
}
