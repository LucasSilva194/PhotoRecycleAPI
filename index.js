require('dotenv').config(); // read environment variables from .env file
const express = require('express');
const cors = require('cors'); // middleware to enable CORS (Cross-Origin Resource Sharing)
const app = express();
const port = process.env.PORT; // use environment variables
const host = process.env.HOST;
app.use(cors()); //enable ALL CORS requests (client requests from other domain)
app.use(express.json()); //enable parsing JSON body data
// root route -- /api/
app.get('/', function (req, res) {
  res.status(200).json({
    message: 'HOME -- PHOTORECYCLE API',
  });
});

// routing middleware for resource PHOTORECYCLE API
app.use('/desafios', require('./routes/desafios.routes.js'));
app.use('/utilizacoes', require('./routes/utilizacoes.routes.js'));
app.use('/medalhas', require('./routes/medalhas.routes.js'));
app.use('/users', require('./routes/utilizadores.routes.js'));
app.use('/ecopontos', require('./routes/ecopontos.routes.js'));

// handle invalid routes
app.get('*', function (req, res) {
  res.status(404).json({
    message: 'WHAT???',
  });
});

const server = app.listen(port, host, () =>
  console.log(`App listening at http://${host}:${port}/`)
);

module.exports = { app, server };
