'use strict';

angular.module('carpooling')
  .config(function($stateProvider) {
    $stateProvider
      .state('rides', {
        url: '/rides',
        templateUrl: 'app/rides/rides.html',
        controller: 'RidesController',
        controllerAs: 'rides'
      });
  });
