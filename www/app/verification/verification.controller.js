(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('VerificationController', VerificationController);

  function VerificationController(User, Toast) {
    var vm = this;
    vm.User = User;

    vm.verifyCode = function(code){
      if( !validateFields(code) ) {
        vm.load = false;
        return;
      }

      var data = {
        email: vm.User.getCurrentUser().email,
        token: code
      }
      
      vm.User.verify(data).then(function(res){
        if(res.data.error = 2001){
          Toast.showMsg('Please check your activation token');
        } 

        if(res.data.status == 'ok'){
          $state.go('main');
        }        
        
      });
    }    

    function validateFields(code) {
      var good = false;
      if(code != ''){
        good = true;
      }
      
      return good;
    }
  }
})();
