(function() {
  'use strict';

  angular
      .module('carpooling')
      .service('modaldetails', modaldetails);

  function modaldetails($uibModal, $log) {

    this.open = open;

    function open(ride) {
      var selected;
      var modalInstance = $uibModal.open({
        animation: 'true',
        templateUrl: 'app/components/modal/modal.html',
        controller: 'ModalController',
        controllerAs: 'modal',
        size: 'md',
        resolve: {
          ride: function () {
            return ride;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        selected = selectedItem;
      }, function () {
        //$log.info('Modal dismissed at: ' + new Date());
      });

    }   

  }

})();
