const { DataTypes } = require('sequelize')
const { sequelize } = require('../db')

const Phone = sequelize.define('phone', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	phoneNumber: DataTypes.STRING,
	anotation: DataTypes.STRING
})

module.exports = Phone
