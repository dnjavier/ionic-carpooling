'use strict';

angular.module('carpooling')
  .config(function($stateProvider) {
    $stateProvider
      .state('carpools', {
        url: '/carpools/:userId',
        templateUrl: 'app/carpools/carpools.html',
        controller: 'CarpoolsController',
        controllerAs: 'carpools'
      });
  });
