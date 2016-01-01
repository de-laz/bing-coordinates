var request = require('request'),
	querystring = require('querystring');

var params = {
    port: 80,
    url: 'http://dev.virtualearth.net/REST/v1/Locations?',
    headers: {}
};

function BingCoordinates(){
	this.q = null;
	this.key = null;
}

BingCoordinates.prototype.setMapKey = function(maps_key){
	this.key = maps_key;
}

BingCoordinates.prototype.getCoordinates = function(location, callback){

	if(this.key === null || 
		typeof this.key === 'undefined'){
		return callback(new Error('Please set your Bing Maps Key.'))
	}

	if(!location || location.length <= 0){
		return callback(new Error('Please set a location'));
	}

	this.q = location;

	retrieveCoordinates({q : this.q, key: this.key}, function(err, coordinates){

		if(err){
			return callback(err);
		}
		return callback(null, coordinates);
	});
}

function retrieveCoordinates(options, callback){

	var p = new Promise(function(resolve, reject){

		params.url += querystring.stringify(options);

		request(params, function(err, resp, body){
			if(!err && resp.statusCode === 200){
				resolve(JSON.parse(body));
			}
			reject(err);
		})
	});

	p.then(function(json){
		var results = readResponse(json);
		if(!results){
			callback(new Error('Could not retrive coordinates'));
		}
		callback(null, {latitude: results[0], longitude: results[1]});
	})
	.catch(function(err){
		callback(err);
	});
}

function readResponse(json){
	if(!json){
		return null;
	}

	var keys = {
		resourceSets : 'resourceSets',
		resources : 'resources',
		point : 'point',
		coordinates : 'coordinates'
	};

	if(json.hasOwnProperty(keys.resourceSets) && 
		json[keys.resourceSets].length > 0) {
		if(json[keys.resourceSets][0].hasOwnProperty(keys.resources) && 
			json[keys.resourceSets][0][keys.resources].length > 0){

			return json[keys.resourceSets][0][keys.resources][0][keys.point][keys.coordinates];
		}
	}

	return null;
}

module.exports = new BingCoordinates();