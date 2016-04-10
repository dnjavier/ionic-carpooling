'use strict';

angular.module('carpooling')
  .config(function($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register/:userId/:lastState',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
      });
  });
