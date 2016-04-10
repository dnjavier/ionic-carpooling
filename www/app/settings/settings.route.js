'use strict';

angular.module('carpooling')
  .config(function($stateProvider) {
    $stateProvider
      .state('settings', {
        url: '/settings/:userId',
        templateUrl: 'app/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'settings'
      });
  });
