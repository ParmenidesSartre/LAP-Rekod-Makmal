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

// GET all strelise records by Id
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

// Update all strelise records by Id
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

// Delete all strelise records by Id
exports.deleteRecordById = (req, res) => {
  const record = records.find((record) => record.id === parseInt(req.params.id))
  if (record) {
    records.splice(records.indexOf(record), 1)
    res.status(200).json({
      status: 'success',
      message : 'Record deleted',
    })
  } else {
    res.status(400).json({
      status : 'fail',
      message : 'Record does not exist'
    })
  }
}

// Create new strelise record
exports.createRecord = (req, res) => {
  
}