const expect = require('chai').expect
const request = require('supertest')

const app = require('../server')

describe('/api/rekod-strelise routes', () => {
  let fakeDb = require('../models/records.model')
  describe('GET /api/rekod-strelise', () => {
    it('should return all records', () => {
      return request(app).get('/api/rekod-strelise').expect(200).then((res) => {
        expect(res.body.data).to.be.an('array')
      })
    })
  })
})
