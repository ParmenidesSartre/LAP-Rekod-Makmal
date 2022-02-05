// Controllers
const recordController = require('../controllers/records.controller');


const recordRouter = require('express').Router();


recordRouter.route('/').get(recordController.getAllRecords);
recordRouter.route('/:id').get(recordController.getRecordById).put(recordController.updateRecordById);


module.exports = recordRouter;