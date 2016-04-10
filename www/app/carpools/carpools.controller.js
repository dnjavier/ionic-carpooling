(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('CarpoolsController', CarpoolsController);

  function CarpoolsController(Carpool) {
    var vm = this;
    vm.today = new Date();
    vm.showLess = false;
    getCarpools(vm.today);

    
    function getCarpools(date) {
      vm.carpools = Carpool.getByDate(date);
    }

    vm.seatsAvailable = function(seats){
      var arr = [];
      for (var i=0; i<seats; i++) {
        arr.push(i)
      }
      return arr;
    }


    vm.oneMoreDay = function(){
      vm.today.setDate(vm.today.getDate() + 1);
      showLess();

    }

    vm.oneLessDay = function(){
      vm.today.setDate(vm.today.getDate() - 1);
      showLess();
    }

    function showLess(){
      var d = new Date();
      if(vm.today > d){
        vm.showLess = true;
      } else {
        vm.showLess = false;
      }

      getCarpools(vm.today);
    }
  }

})();
