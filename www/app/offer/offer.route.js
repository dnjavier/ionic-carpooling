'use strict';

angular.module('carpooling')
  .config(function($stateProvider) {
    $stateProvider
      .state('offer', {
        url: '/offer/:lastState',
        templateUrl: 'app/offer/offer.html',
        controller: 'OfferController',
        controllerAs: 'offer'
      });
  });
