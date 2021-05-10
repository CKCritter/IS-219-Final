const express = require('express');
const cors = require('cors');
const { auth, requiresAuth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:9080',
    clientID: 'AX4LKct4qaEQ1VBnDBoynhUeEqZTIsNq',
    issuerBaseURL: 'https://dev-qg8-t8rt.us.auth0.com',
};

const server = express();
server.use(cors());
server.use(auth(config));

//const mainRoutes = require('./routes/main.routes');

server.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

//server.use('/api/v1/hw_100', hwRoutes);
//server.use('', mainRoutes);

server.set('view engine', 'hbs');
server.set('port', process.env.PORT || 9080);
server.set('ip', process.env.NODEJS_IP || '127.0.0.1');

server.listen(server.get('port'), () => {
    console.log('%s: Node server started on %s ...', Date(Date.now()), server.get('port'));
});