'use strict';

angular.module('carpooling')
  .config(function($stateProvider) {
    $stateProvider
      .state('car', {
        url: '/car/:_id/:lastState',
        templateUrl: 'app/car/car.html',
        controller: 'CarController',
        controllerAs: 'car'
      });
  });
