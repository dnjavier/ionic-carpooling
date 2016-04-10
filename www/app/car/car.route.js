'use strict';

angular.module('carpooling')
  .config(function($stateProvider) {
    $stateProvider
      .state('car', {
        url: '/car/:userId/:_id',
        templateUrl: 'app/car/car.html',
        controller: 'CarController',
        controllerAs: 'car'
      });
  });
