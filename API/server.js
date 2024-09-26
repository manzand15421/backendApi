const express = require('express');
const bodyParser = require('body-parser');
const app = express();
port = 3000;

// parse application json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// routes
let routes = require('./routes');
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});