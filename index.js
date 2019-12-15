'use strict';

require('dotenv').config({ path: '.env' });

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./models/db');

const { port, env } = require('./config');
const logger = require('./utils/logger');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
}));

app.use(routes);

db.sync({ ...(env !== 'prd' && { force: true }) })
    .then(() => {
        app.listen(port, () => {

            logger.info(`Listening on port ${port}`);
        });
    })
    .catch(logger.error);
