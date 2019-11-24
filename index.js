'use strict';

require('dotenv').config({ path: '.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { port } = require('./config');
const logger = require('./utils/logger');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => {

    logger.info(`Listening on port ${port}`);
});
