// Controllers
const recordController = require('../controllers/records.controller')

const recordRouter = require('express').Router()

recordRouter.route('/').get(recordController.getAllRecords).post(recordController.createRecord)
recordRouter
  .route('/:id')
  .get(recordController.getRecordById)
  .put(recordController.updateRecordById)
  .delete(recordController.deleteRecordById)

module.exports = recordRouter
