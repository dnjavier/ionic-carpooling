(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('CarController', CarController);

  function CarController($stateParams, Carpool) {
    var vm = this;
    vm.userId = $stateParams.userId;
    vm.carId = $stateParams._id;
    vm.carpool = Carpool.getOne(vm.carId);


    vm.seatsAvailable = function(seats){
      var arr = [];
      for (var i=0; i<seats; i++) {
        arr.push(i)
      }
      return arr;
    }
    
  }

})();
