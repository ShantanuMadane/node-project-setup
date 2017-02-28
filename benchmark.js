var siege=require('siege');
siege()
  .on(3001)
  .for(10000).times
  .get('/')
  .attack()