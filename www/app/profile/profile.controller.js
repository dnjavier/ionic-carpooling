(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('ProfileController', ProfileController);

  function ProfileController($stateParams, User, $state) {
    var vm = this;
    //vm._id = $stateParams._id;
    vm.user = User.getCurrentUser();
    /*User.getOne(vm._id).then(function(res){
      vm.user = res.data;
    });*/

    vm.edit = function(){
      $state.go('register', {userId: vm.user._id, lastState: 'profile'});
    }
    
  }

})();
