(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('ProfileController', ProfileController);

  function ProfileController($stateParams, User, $state) {
    var vm = this;
    vm.user = User.getCurrentUser();

    vm.edit = function(){
      $state.go('register', {userId: vm.user._id, lastState: 'profile'});
    }
    
  }

})();
