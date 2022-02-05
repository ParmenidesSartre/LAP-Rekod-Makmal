const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Router Import
const recordsRoute = require('./routes/records.routes');
const mlRouter = require('./routes/machinelearning.routes');

// Documentation using swagger
const swaggerUi = require('swagger-ui-express');
const docs = require('./docs/documentation');

// Body parser middleware
app.use(bodyParser.json());

// Routes
app.use('/api/rekod-strelise', recordsRoute);
app.use('/api/machine-learning', mlRouter);

app.use('/', swaggerUi.serve, swaggerUi.setup(docs));







const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


module.exports = app