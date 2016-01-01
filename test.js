var assert = require('assert'),
	bingCoordinates = require('./index');

beforeEach(() => {
	bingCoordinates.setMapKey(process.env.BING_MAP_KEY);
});

describe('setMapKey', () => {
	it('bing map key should be set', () => {
  		assert(bingCoordinates.key !== null &&
  			typeof bingCoordinates.key !== 'undefined' &&
  			bingCoordinates.key == process.env.BING_MAP_KEY);
  	});
});

describe('getCoordinates', () => {

	it('should return coordinates', (done) => {
  		bingCoordinates.getCoordinates('Table Mountain, South Africa', (err, coordinates) => {
  			if(err){
  				throw err;
  			}

  			assert(c);
  		});
  		done();
  	});

  	it('should return correct coordinates', (done) => {

  		var coords = {
			latitude : -33.967163,
			longitude : 18.416681
		};
		
  		bingCoordinates.getCoordinates('Table Mountain, South Africa', (err, coordinates) => {
  			
  			if(err){
  				throw err;
  			}
  			assert(coordinates.latitude === coords.latitude);
  			assert(coordinates.longitude === coords.longitude);		
  		});
  		done();
  	});

});