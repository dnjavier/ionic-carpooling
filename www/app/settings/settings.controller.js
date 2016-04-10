(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('SettingsController', SettingsController);

  function SettingsController($stateParams) {
    var vm = this;
    vm.userId = $stateParams.userId;
    
  }

})();
