const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

//Model
const Donors = require('../models/Donors')

const connection = new Sequelize(dbConfig)

Donors.init(connection)

module.exports = connection