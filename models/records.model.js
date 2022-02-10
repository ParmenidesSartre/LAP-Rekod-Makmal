/* const records = [
  {
    id: 1,
    name: 'Lorem Ipsum',
    date: '2021-01-01',
    place: 'Lorem Ipsum',
    location: [25.2084, 55.2719],
    records : [10,20,40,14]
  },
  {
    id: 2,
    name: 'Lorem Ipsum',
    date: '2022-01-01',
    place: 'Lorem Ipsum',
    location: [25.2084, 55.2719],
    records : [20,20,15,40]
  },
]

module.exports = records */

const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A record must have a name'],
    unique: true,
    trim: true,
  },
  contractorName : {
    type: String,
    required : [true, 'A record must have contractor name']
  },
  date: {
    type: Date,
    required: [true, 'A record must have a date'],
  },
  place : {
    type: String,
    required : [true, 'A record must have a place']
  },
  location : {
    type: [Number],
    required : [true, 'A record must have a location']
  },
  pipeType: {
    type: String,
    required : [true, 'A record must have pipe type']
  },
  pipeSize : {
    type : Number,
    required : [true, 'A record must have a pipe size']
  },
  pipeLength : {
    type: Number,
    required : [true, 'A record must have a pipe length']
  },
  records : {
    type: [Number],
    required : [true, 'A record must have records']
  },
  image : {
    type : String,
    required : [true, 'A record must have an image']
  }
})


module.exports = mongoose.model('Strelisation Record', recordSchema )