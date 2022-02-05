const express = require('express');
const app = express();

// Routes
const recordsRoute = require('./routes/records.routes');


app.use('/api/rekod-strelise', recordsRoute);





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


module.exports = app