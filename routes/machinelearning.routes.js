const mlRouter = require('express').Router();
const mlController = require('../controllers/machinelearning.controller');

mlRouter.route('/').get(mlController.getPrediction);

module.exports = mlRouter;