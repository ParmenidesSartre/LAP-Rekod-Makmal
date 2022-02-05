const axios = require('axios')

// Calling another rest api for prediction
exports.getPrediction = async (req, res) => {
  const response = await axios.post(
    'https://faizalazman.pythonanywhere.com/v1/api/results/',
    req.body,
  )
  if (response) {
    res.status(200).json({
      status: 'success',
      data: response.data,
    })
  } else {
    res.status(400).json({
      status: 'fail',
      message: 'Something went wrong',
    })
  }
}
