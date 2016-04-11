(function() {
  'use strict';

  angular
      .module('carpooling')
      .service('Cities', Cities);

  function Cities($http) {

    this.getAll = getAll;
    this.getCantons = getCantons;

    function getAll() {
      var url = 'https://carpool-ulacit.rhcloud.com/provincia/all';
      return $http.get(url);
    }

    function getCantons(province) {
      var url = 'https://carpool-ulacit.rhcloud.com/provincia/canton/'+province;
      return $http.get(url);
    }

  }

})();
