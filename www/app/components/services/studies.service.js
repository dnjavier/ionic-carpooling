(function() {
  'use strict';

  angular
      .module('carpooling')
      .service('Studies', Studies);

  function Studies($http) {

    this.getAll = getAll;

    function getAll() {
      var url = 'https://carpool-ulacit.rhcloud.com/carrera/all';
      return $http.get(url);
    }

  }

})();
