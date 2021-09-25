const Sequelize = require("sequelize")
const dbConfig = require("../config/database")
const Funcionario = require("../models/Funcionario")
const connection = new Sequelize(dbConfig)
Funcionario.init(connection)
module.exports = connection