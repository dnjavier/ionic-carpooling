(function() {
  'use strict';

  angular
      .module('carpooling')
      .service('Carpool', Carpool);

  function Carpool($rootScope) {    
    $rootScope.socket = io('wss://carpool-ulacit.rhcloud.com:8443');
    $rootScope.socket.on('err', function(data){
      console.log(data);
    });

    var localRides = [];

    this.getOne = getOne;
    this.filterByDate = filterByDate;
    this.getRidesByOwner = getRidesByOwner;
    this.joinCar = joinCar;
    this.getOrigins = getOrigins;
    this.getDestinies = getDestinies;
    this.setLocalRides = setLocalRides;

    //sockets
    this.createRide = createRide;

    function createRide(ride){
      $rootScope.socket.emit('createRide', ride);
    }    

    function getOne(rideId) {
      for (var i = localRides.length - 1; i >= 0; i--) {
        if(localRides[i]._id == rideId){
          return localRides[i];
        }
      }
    }

    function setLocalRides(rides){
      localRides = rides;
    }

    function filterByDate(date, rides, userId) {
      localRides = rides;
      var arr = [];
      var day = date.getDate();
      var month = date.getMonth();
      var year = date.getFullYear();

      for(var i=0; i<rides.length; i++){
        if(rides[i].owner._id != userId){
          rides[i].date = new Date(rides[i].date);
          var dDay = rides[i].date.getDate();
          var dMonth = rides[i].date.getMonth();
          var dYear = rides[i].date.getFullYear(); 

          if(year == dYear 
            && month == dMonth
            && day == dDay) {
            arr.push(rides[i]);          
          }
        }        
      }
      return arr;
    }

    function getRidesByOwner(ownerId){
      var arr = [];
      for (var i = localRides.length - 1; i >= 0; i--) {
        if(localRides[i].owner._id == ownerId){
          arr.push(localRides[i]);
        }
      }
      return arr;
    }

    function joinCar(user, carId){
      getOne(carId).people.push(user);
    }

    function getOrigins() {
      var origins = [];
      for(var i=0; i<data.length; i++){
        origins.push(data[i].origin);
      }
      return origins;
    }

    function getDestinies() {
      var destinies = [];
      for(var i=0; i<data.length; i++){
        destinies.push(data[i].destiny);
      }
      return destinies;
    }

  }

})();
