var friendsData 		= require('../data/friends.js');
var path 			= require('path');
var bodyParser = require('body-parser');


// ===============================================================================
// ----------- API ROUTES
// ===============================================================================

module.exports = function(app){

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.text());
	app.use(bodyParser.json({type:'application/vnd.api+json'}));

	// --------------------------------------------------------------------------

	// API GET Requests
	// this will handle when the user visits a page when a user visits a link
	// when a user visits a link 

	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	});

	// API POST Requests
	//handles the form when user submits and sends data to the server
	// JSON is pushed to the  Javascript array


	// ---------------------------------------------------------------------------

	app.post('/api/friends', function(req, res){
		console.log(req.body);
		friendsData.push(req.body);
	});

}