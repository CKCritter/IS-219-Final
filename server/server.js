const express = require('express');
const cors = require('cors');
const jwt = require("express-jwt");
const jwks = require('jwks-rsa');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const server = express();

server.use(cors());

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-qg8-t8rt.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://localhost:9080/',
    issuer: 'https://dev-qg8-t8rt.us.auth0.com/',
    algorithms: ['RS256']
});

server.use(jwtCheck);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cookieParser());

const mainRoutes = require('./routes/main.routes');
server.use('/api/secrets', mainRoutes);

server.set('port', process.env.PORT || 9080);
server.set('ip', process.env.NODEJS_IP || '127.0.0.1');

server.listen(server.get('port'), () => {
    console.log('%s: Node server started on %s ...', Date(Date.now()), server.get('port'));
});