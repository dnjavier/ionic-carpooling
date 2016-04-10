'use strict';

angular.module('carpooling')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main/:userId',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  });
