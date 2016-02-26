/* eslint-env mocha */

// const expect = require('chai').expect
// const APIctl = require('ipfs-api')

describe('object', () => {
  describe('api', () => {
    var api

    it('api', (done) => {
      api = require('../../src/http-api').server.select('API')
      done()
    })

    it('get the obj', (done) => {
      api.inject({
        method: 'GET',
        url: '/api/v0/object'
      }, (res) => {
        expect(res.result).to.deep.equal(idResult)
        done()
      })
    })

    it('new obj', (done) => {
      api.inject({
        method: 'GET',
        url: '/api/v0/object/new'
      }, (res) => {
        // TODO
        done()
      })
    })

    describe('patch', () => {

      it('append data', (done) => {
        api.inject({
          method: 'GET',
          url: '/api/v0/object/data/append'
        }, (res) => {
          // TODO
          done()
        })
      })

      it('set data', (done) => {
        api.inject({
          method: 'GET',
          url: '/api/v0/object/data/set'
        }, (res) => {
          // TODO
          done()
        })
      })

      it('add link', (done) => {
        api.inject({
          method: 'GET',
          url: '/api/v0/object/link/add'
        }, (res) => {
          // TODO
          done()
        })
      })

      it('rm link', (done) => {
        api.inject({
          method: 'GET',
          url: '/api/v0/object/link/rm'
        }, (res) => {
          // TODO
          done()
        })
      })
    }

    it('get obj data', (done) => {
      api.inject({
        method: 'GET',
        url: '/api/v0/object/data'
      }, (res) => {
        // TODO
        done()
      })
    })

    it('get obj links', (done) => {
      api.inject({
        method: 'GET',
        url: '/api/v0/object/links'
      }, (res) => {
        // TODO
        done()
      })
    })

    it('put obj', (done) => {
      api.inject({
        method: 'GET',
        url: '/api/v0/object/put'
      }, (res) => {
        // TODO
        done()
      })
    })

    it('obj stat', (done) => {
      api.inject({
        method: 'GET',
        url: '/api/v0/object/stat'
      }, (res) => {
        // TODO
        done()
      })
    })

  })

  describe('gateway', () => {})

  describe('using js-ipfs-api', () => {
//    var ctl

    it('start IPFS API ctl', (done) => {
//      ctl = APIctl('/ip4/127.0.0.1/tcp/6001')
      done()
    })
  })
})

const objResult = {
  // TODO
}