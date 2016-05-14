'use strict';

angular.module('carpooling')
  .config(function($stateProvider) {
    $stateProvider
      .state('verification', {
        url: '/',
        templateUrl: 'app/verification/verification.html',
        controller: 'VerificationController',
        controllerAs: 'verification'
      });
  });
