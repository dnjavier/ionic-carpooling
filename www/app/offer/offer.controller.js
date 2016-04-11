(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('OfferController', OfferController);

  function OfferController($stateParams, $state, Carpool, Cities, User) {
    var vm = this;

    vm.User = User;
    vm.Carpool = Carpool;
    vm.Cities = Cities;
    vm.allCities = getAllCities();
    vm.lastState = $stateParams.lastState;
    vm.ride = {};
    vm.ride.date = new Date();
    
    vm.create = function(ride){
      ride.owner = User.getCurrentUser()._id;
      vm.Carpool.createRide(ride);
      ride = {};
      $state.go('rides');
    }

    /*
     *  Get all the cantons from DB when a province
     *  is selected.
     */
    vm.getCantons = function(province, way){
      vm.Cities.getCantons(province).then(function(res){
        if(way == 'from'){
          vm.allCantonsFrom = res.data;
        }

        if(way == 'to'){
          vm.allCantonsTo = res.data;
        }

      });
    }

    /*
     *  Get all the cities from DB
     */
    function getAllCities(){      
      vm.Cities.getAll().then(function(res){
        vm.allCities = res.data;
      });
    }
  }

})();
