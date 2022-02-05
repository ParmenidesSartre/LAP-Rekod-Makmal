const express = require('express');
const app = express();

// Routes
const recordsRoute = require('./routes/records.routes');

// Documentation using swagger
const swaggerUi = require('swagger-ui-express');
const docs = require('./docs/documentation');


app.use('/api/rekod-strelise', recordsRoute);

app.use('/', swaggerUi.serve, swaggerUi.setup(docs));







const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


module.exports = app