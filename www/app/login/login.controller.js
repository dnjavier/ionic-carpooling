(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('LoginController', LoginController);

  function LoginController($state, User) {
    var vm = this;
    
    vm.login = function(user){
      if( validateFields(user) ) {
        $state.go('main');
      }
      
    }

    function validateFields(user) {
      var good = false;
      if(user !== undefined){
        if(user.name.length > 0
          && user.password.length > 0){
          good = true;
        }
      }
      
      return good;
    }
  }
})();
