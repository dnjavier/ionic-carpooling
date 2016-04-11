(function() {
  'use strict';

  angular
    .module('carpooling')
    .directive('menu', menu);

  function menu() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/directives/menu/menu.html',
      scope: {
        
      },
      controller: MenuController,
      controllerAs: 'menu',
      bindToController: true
    };

    return directive;

    function MenuController(User, $state) {
      var vm = this;
      vm.showMenu = false;
      vm.userId = User.getCurrentUser()._id;

      vm.checkState = function(state) {
        if($state.$current.name == state){
          vm.toggleMenu();
        }
      }

      vm.toggleMenu = function(){        
        if(vm.showMenu){
          vm.showMenu = false;
        } else {
          vm.showMenu = true;
        }
      }

      vm.logout = function() {
        User.logout();
      }

    }
  }

})();
