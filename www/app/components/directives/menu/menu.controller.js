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

    function MenuController() {
      var vm = this;
      vm.showMenu = false;

      vm.toggleMenu = function(){        
        if(vm.showMenu){
          vm.showMenu = false;
        } else {
          vm.showMenu = true;
        }
      }

    }
  }

})();
