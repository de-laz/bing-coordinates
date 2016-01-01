### Installation
`npm install bing-coordinates`  

### Usage  

```
var bingCoordinates = require('bing-coordinates');

bingCoordinates.setMapKey(YOUR_BING_MAP_KEY);

bingCoordinates.getCoordinates(LOCATION, function(err, coordinates){
  console.log('Latitude: ' + coordinates.latitude, 'Longitude: ' + coordinates.longitude);
});
