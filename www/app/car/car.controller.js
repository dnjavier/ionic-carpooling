(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('CarController', CarController);

  function CarController($stateParams, Carpool, $rootScope, $scope, User) {
    var vm = this;
    vm.userId = User.getCurrentUser()._id;
    vm.lastState = $stateParams.lastState;
    vm.carId = $stateParams._id;
    vm.carpool = Carpool.getOne(vm.carId);
    vm.alreadyJoined = true;

    for (var i = vm.carpool.joinedUsers.length - 1; i >= 0; i--) {
      if(vm.carpool.joinedUsers[i]._id == vm.userId){
        vm.alreadyJoined = false;
      }
    }

    if(vm.carpool.owner._id == vm.userId){
      vm.alreadyJoined = false;
    }

    /*
     * Is constantly updating the rides
     */
    $rootScope.socket.on('updateClientRides', function(data){
      $scope.$apply(function(){
        Carpool.setLocalRides(data);
        vm.carpool = Carpool.getOne(vm.carId);
      });
    });

    vm.join = function(){
      $rootScope.socket.emit('joinRide', {
        user: vm.userId, 
        ride: vm.carId
      });
      vm.alreadyJoined = false;
    }

    vm.seatsAvailable = function(seats){
      var arr = [];
      for (var i=0; i<seats; i++) {
        arr.push(i)
      }
      return arr;
    }
    
  }

})();
