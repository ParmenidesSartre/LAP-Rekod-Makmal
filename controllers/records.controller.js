// Model
const records = require('../models/records.model')

// GET all strelise records
exports.getAllRecords = (req, res) => {
  const allRecords = records
  res.status(200).json({
    status: 'success',
    length: allRecords.length,
    data: records,
  })
}

exports.getRecordById = (req, res) => {
  const record = records.find((record) => record.id === parseInt(req.params.id))
  if (!record) {
    res.status(400).json({
      status: 'fail',
      message: 'Record not found',
    })
  } else {
    res.status(200).json({
      status: 'success',
      data: record,
    })
  }
}

exports.updateRecordById = (req, res) => {
  const record = records.find((record) => record.id === parseInt(req.params.id))
  if (!record) {
    res.status(400).json({
      status: 'fail',
      message: 'Record not found',
    })
  } else {
    // Check if data is valid
    if (
      req.body.name &&
      req.body.date &&
      req.body.place &&
      req.body.location &&
      req.body.records
    ) {
      // Check if record provided is an array
      const records = req.body.records
      if (Array.isArray(records)) {
        res.status(201).json({
          status: 'success',
          data: record,
        })
      } else {
        res.status(400).json({
          status: 'fail',
          message: 'Records must be an array',
        })
      }
    } else {
      res.status(400).json({
        status: 'fail',
        message: 'Invalid data',
      })
    }
  }
}
