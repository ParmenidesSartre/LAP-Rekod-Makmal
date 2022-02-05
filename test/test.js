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

    it('should return strelise record by id', () => {
        return request(app).get('/api/rekod-strelise/1').expect(200).then((res) => {
            expect(res.body.data).to.be.an('object')
            expect(res.body.data.id).to.equal(1)
            expect(res.body.data).has.ownProperty('name')
            expect(res.body.data).has.ownProperty('date')
            expect(res.body.data).has.ownProperty('place')
            expect(res.body.data).has.ownProperty('location')
            expect(res.body.data.location).to.be.an('array')
        })
    })

  })
})
