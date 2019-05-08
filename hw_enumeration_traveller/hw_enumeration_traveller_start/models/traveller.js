const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function(startLocation) {
   return this.journeys.find((start) => {
    return start.location === startLocation; 
  });
};

Traveller.prototype.getJourneyEndLocations = function (location) {
  return this.journeys.find((end) => {
    return end.location === location;
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

Traveller.prototype.getUniqueModesOfTransport = function (transport, mode) {
  return this.journeys.filter((banana) => {
    return banana[transport] === mode;
  });
};


module.exports = Traveller;
