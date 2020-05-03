// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');
/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";
const AVAILABLE_API_KEYS = ['test_user'];
/**
 *  App Configuration
 */
// CORS
const whitelist = ['.app']
const corsOptions = {
    origin: function(origin, callback) {
    let originIsWhitelisted = whitelist.some((domain) => {
        if(origin) {
            return origin.indexOf(domain) !== -1;
        }
        return false;
        });
      if(origin === 'http://localhost:3001') {
        originIsWhitelisted = true;
      }
      console.log(origin);
      callback(null, originIsWhitelisted);
    }
  };
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
});
app.get("/keyID/:id", (req, res) => {
    if(!req.body || !req.params.id) return res.status(400).json({ text: 'Missing parameter id' });
    const userId = req.params.id;
    if(AVAILABLE_API_KEYS.includes(userId.toString())) {
        const encryption_keys = {
            keyId: 'oW5AK5BW43HzbTSKpiu3SQ',
            key: 'hyN9IKGfWKdAwFaE5pm0qg'
        };
        res.status(200).send(encryption_keys);
    } else {
        return res.status(400).json({ text: 'User not authenticated' });
    }
    
});
app.post('/', function (req, res) {
    res.send('Got a POST request')
});
/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});