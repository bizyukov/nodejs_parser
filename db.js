const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('nodejs_parser', 'root', '1234', {
	dialect: 'mysql',
	dialectOptions: {
		// Your pg options here
	}
})

module.exports = {
	sequelize
}