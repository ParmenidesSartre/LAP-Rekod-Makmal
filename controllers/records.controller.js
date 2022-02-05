// Model
const records = require('../models/records.model')


// GET all strelise records
exports.getAllRecords = (req, res) => {
  const allRecords = records
  res.status(200).json({
    status: 'success',
    length: allRecords.length,
    data : records
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
