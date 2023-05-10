const dbConfig = require('../config/db.config.js');
const mongoose = require("mongoose");
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.URL;
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database!");
}).catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});
db.users = require("./utilizadores.model.js")(mongoose);
db.desafios = require("./desafios.model.js")(mongoose);
db.ecopontos = require("./ecopontos.model.js")(mongoose);
db.pontos = require("./pontos.model.js")(mongoose);
db.registo = require("./registo.model.js")(mongoose);
db.autenticacao = require("./autenticacao.model.js")(mongoose);
db.mongoose = require("./mongoose.model.js")(mongoose);
module.exports = db;