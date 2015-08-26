// var JSX = require('node-jsx').install()
// var React = require('react')
// var Tweet = require('./models/Tweet');
// var TweetsApp = require('./components/TweetsApp.react')

module.exports = {
	index: function(req, res){	
		res.render('home',{});	
	}
}