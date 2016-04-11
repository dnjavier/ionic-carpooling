(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('RidesController', RidesController);

  function RidesController(Carpool, User, $rootScope, $scope) {
    var vm = this;
    vm.userId = User.getCurrentUser()._id;
    vm.Carpool = Carpool;
    vm.rides = [];
    vm.rides = vm.Carpool.getRidesByOwner(vm.userId);

    /*
     * Is constantly updating the rides
     */
    $rootScope.socket.on('updateClientRides', function(data){
      $scope.$apply(function(){
        Carpool.setLocalRides(data);
        vm.rides = vm.Carpool.getRidesByOwner(vm.userId);
      });
    });

    vm.seatsAvailable = function(seats){
      var arr = [];
      for (var i=0; i<seats; i++) {
        arr.push(i)
      }
      return arr;
    }
    
  }

})();
