(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('TripsController', TripsController);

  function TripsController($stateParams) {
    var vm = this;
    vm.userId = $stateParams.userId;
    
  }

})();
