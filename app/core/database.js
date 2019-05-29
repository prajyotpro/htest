const config 	= require('../config/')

const mongoose 	= require('mongoose')
connectionString= 'mongodb://'+config.database.host+':'+config.database.port+'/'+config.database.database

// initialize connection
mongoose.connect(connectionString, {
	auth: {
		user 	: config.database.username,
		password: config.database.password
	},
	userNewUrlParser: true
})
.then(function(res) {
	return console.log("Database connected ...")
})
.catch(function(err) {
	console.log(err)
	return process.exit()
})

module.exports = {
	Database 	: mongoose
}