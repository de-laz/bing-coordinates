var request = require('request');

var v = '0.0.1';
var maps_key = null;
var params = {
    host: 'dev.virtualearth.net',
    port: 80,
    path: '/REST/v1/Locations?',
    headers: {}
};



BingCoordinates.prototype.setApiKey = key => {
	maps_key = maps_key;
}

BingCoordinates.prototype.getCoordinates = (location, callback) => {

	if(maps_key === null || typeof maps_key === 'undefined'){
		return callback(new Error('Please set your Bing Maps Key.'))
	}

	if(!location || location.length <= 0){
		return callback(new Error('Please set a location'));
	}
}

function retrieveCoordinates(key, location, callback){
	var p = new Promise(function(resolve, reject){
		request(params, function(err, resp, body){
			if(!err && resp.statusCode === 200){
				resolve(JSON.parse(body));
			}
			reject(err);
		})
	});

	p.then(function(json){
		callback(null, {lat: '', lon: ''});
	})
	.catch(function(err){
		callback(err);
	});
}

module.exports = new BingCoordinates();