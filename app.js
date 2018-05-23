const express = require('express');
const bodyParser = require('body-parser');

const app = express();

console.log('Launching...');

// config pour POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// définit la route '' comme racine de nos requêtes
app.use('', require('./route/gate.route'));

const router = express.Router();

// pour accéder à l'api depuis un autre domaine
// (pas nécessaire si l'api et ses clients sont sur le même serveur)
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// lance le serveur sur le port défini
const port = 8080;
const server = app.listen(process.env.PORT || port, () => {
  console.log(`Listening on port ${server.address().port}...`);
});

console.log('It\'s all good (y)');
