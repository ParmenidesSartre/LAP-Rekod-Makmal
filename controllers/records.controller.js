// Model
const Record = require('../models/records.model')

// GET all strelise records
exports.getAllRecords = async (req, res) => {
  const allRecords = await Record.find({})
  res.status(200).json({
    status: 'success',
    length: allRecords.length,
    data: allRecords,
  })
}

// GET all strelise records by Id
exports.getRecordById = async (req, res) => {
  const record = await Record.find({ _id: req.params.id })
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
exports.updateRecordById = async (req, res) => {
  const record = await Record.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, useFindAndModify: false },
  )
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
  Record.findOneAndDelete({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.status(400).json({
        status: 'fail',
        message: 'Record does not exist',
      })
    } else {
      res.status(200).json({
        status: 'success',
        message: 'Record deleted',
      })
    }
  })
}

// Create new strelise record
exports.createRecord = (req, res) => {
  const record = new Record(req.body)
  record.save((err, result) => {
    if (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      })
    } else {
      res.status(200).json({
        status: 'success',
        message: 'New record created',
      })
    }
  })
}
