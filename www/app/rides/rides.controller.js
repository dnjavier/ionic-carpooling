(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('RidesController', RidesController);

  function RidesController($stateParams) {
    var vm = this;
    vm.userId = $stateParams.userId;
    
  }

})();
