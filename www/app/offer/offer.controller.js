(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('OfferController', OfferController);

  function OfferController($stateParams, $state) {
    var vm = this;
    vm.lastState = $stateParams.lastState;
    
    vm.create = function(){
      $state.go('rides');
    }
  }

})();
