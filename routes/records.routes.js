// Multer
const upload = require('../controllers/utils')

// Controllers
const recordController = require('../controllers/records.controller')

const recordRouter = require('express').Router()

recordRouter.route('/').get(recordController.getAllRecords).post(recordController.createRecord)
recordRouter
  .route('/:id')
  .get(recordController.getRecordById)
  .put(recordController.updateRecordById)
  .delete(recordController.deleteRecordById)
recordRouter
  .route('/cetak/:id')
  .get(recordController.printRecordById)
recordRouter
  .route('/image/:id')
  .post(upload,recordController.postImage)
  .get(recordController.getImageById)


module.exports = recordRouter
