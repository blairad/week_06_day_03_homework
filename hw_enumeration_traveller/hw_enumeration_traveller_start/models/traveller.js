const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function(startLocation) {
   return this.journeys.map((start) => {
    return start.startLocation; 
  });
};

Traveller.prototype.getJourneyEndLocations = function (location) {
  return this.journeys.map((end) => {
    return end.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((mode) => {
    return mode.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, distance) => {
    return total += distance.distance; 
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.filter(function(banana) {
    return seen.getUniqueModesOfTransport(transport) ? false: (seen[transport] = true);
  });
};


module.exports = Traveller;


// function uniq(a) {
//   var seen = {};
//   return a.filter(function(item) {
//       return seen.hasOwnProperty(item) ? false : (seen[item] = true);
//   });
// }