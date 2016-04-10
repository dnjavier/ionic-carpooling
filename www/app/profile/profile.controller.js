(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('ProfileController', ProfileController);

  function ProfileController($stateParams, User) {
    var vm = this;
    vm._id = $stateParams._id;

    vm.user = User.getOne(vm._id);

    
  }

})();
