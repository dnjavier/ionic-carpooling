(function() {
  'use strict';

  angular
      .module('carpooling')
      .service('Toast', Toast);

  function Toast($http) {

    this.showMsg = showMsg;

    function showMsg(msg){
      return $cordovaToast
              .show(msg, 'short', 'bottom');
    }

  }

})();
