(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('ProfileController', ProfileController);

  function ProfileController($stateParams, User, $state) {
    var vm = this;
    vm.edit = true;

    var userId = $stateParams.userId;
    
    if(userId != ''){
      if(userId == User.getCurrentUser()._id){
        vm.user = User.getCurrentUser();
        vm.edit = true;
      } else {
        User.getOne(userId).then(function(res){
          vm.edit = false;
          vm.user = res.data;
        });
      }      
    } else {      
      vm.user = User.getCurrentUser();
    }

    vm.edit = function(){
      $state.go('register', {userId: vm.user._id, lastState: 'profile'});
    }
    
  }

})();
