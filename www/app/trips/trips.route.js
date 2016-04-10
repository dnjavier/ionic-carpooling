'use strict';

angular.module('carpooling')
  .config(function($stateProvider) {
    $stateProvider
      .state('trips', {
        url: '/trips/:userId',
        templateUrl: 'app/trips/trips.html',
        controller: 'TripsController',
        controllerAs: 'trips'
      });
  });
