(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('ModalController', ModalController);

  function ModalController(ride, $uibModal, $log) {
    var vm = this;
    vm.ride = ride;
    
  }

})();
