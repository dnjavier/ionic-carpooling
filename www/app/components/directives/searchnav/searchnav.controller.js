(function() {
  'use strict';

  angular
    .module('carpooling')
    .directive('searchNav', searchNav);

  function searchNav() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/directives/searchnav/searchnav.html',
      scope: {

      },
      controller: SearchController,
      controllerAs: 'search',
      bindToController: true
    };

    return directive;

    function SearchController() {
      var vm = this;

    }
  }

})();
