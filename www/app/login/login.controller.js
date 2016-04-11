(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('LoginController', LoginController);

  function LoginController($state, User) {
    var vm = this;
    vm.User = User;
    
    vm.login = function(user){
      if( !validateFields(user) ) {
        return;
      }

      vm.User.login(user).then(function(res){
        if(res.data.status == 'ok'){
          vm.User.setCurrentUser(res.data.user);
          $state.go('main');
        }
      });      
    }

    function validateFields(user) {
      var good = false;
      if(user !== undefined){
        if(user.email.length > 0
          && user.password.length > 0){
          good = true;
        }
      }
      
      return good;
    }
  }
})();
