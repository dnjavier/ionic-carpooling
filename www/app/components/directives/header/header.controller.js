(function() {
  'use strict';

  angular
    .module('carpooling')
    .directive('headerBar', headerBar);

  function headerBar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/directives/header/header.html',
      scope: {
        title: '=',
        route: '='
      },
      controller: HeaderController,
      controllerAs: 'header',
      bindToController: true
    };

    return directive;

    function HeaderController() {
      var vm = this;
      
      if(vm.title == 'back'){
        vm.arrow = true;
      } else {
        vm.arrow = false;
      }

    }
  }

})();
