(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('MainController', MainController);

  function MainController($state, User, $stateParams) {
    var vm = this;
    vm.User = User;
    vm.bool =  false;
    vm.opt = '';
    var userId = $stateParams.userId;
    
    User.getOne(userId).then(function(res){
      vm.user = res.data;
    });

    vm.btnClass = function(bool, opt) {
      vm.bool = bool;
      vm.opt = opt;
      var element = angular.element(document.querySelector('.main button'));
      if(bool){
        element.addClass('btn-green');
      } else {
        element.removeClass('btn-green');
      }            
    }

    vm.continue = function(){
      if(vm.bool && vm.opt == 'find'){
        $state.go('carpools');
      } else if(vm.bool && vm.opt == 'offer'){
        $state.go('offer', {lastState: 'main'});
      }
    }
  }
})();
