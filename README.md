### Installation
`npm install bing-coordinates`  

### Usage  

```
var bing-coordinates = require('bing-coordinates');

bing-coordinates.setMapKey(YOUR_BING_MAP_KEY);

bing-coordinates.getCoordinates(LOCATION, function(err, coordinates){
  console.log('Latitude: ' + coordinates.latitude, 'Longitude: ' + coordinates.longitude);
});
