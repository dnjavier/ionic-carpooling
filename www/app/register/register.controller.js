(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('RegisterController', RegisterController);

  function RegisterController($stateParams, User, $state) {
    var vm = this;
    vm.User = User;
    vm.userId = $stateParams.userId;
    vm.route = $stateParams.lastState;
    vm.edit = false;
    
    if(vm.userId != ''){
      vm.edit = true;
    }

    if(vm.route == 'profile') {
      vm.route += '({_id:'+ vm.userId +'})';
    }
    
    if(vm.edit){
      vm.user = vm.User.getOne(vm.userId);
    }

    /*
     * Register an user to DB
     */
    vm.reg = function(user) {
      vm.User.create(user).then(function success(res){
        console.log('success user create');
      }, function error(res){
        console.log('error user crete');
      });

      console.log(user);

    }

    vm.save = function(){
      //save changes in user, update.
      $state.go('profile', {_id: vm.userId});
    }
    
  }

})();
