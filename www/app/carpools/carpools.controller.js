(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('CarpoolsController', CarpoolsController);

  function CarpoolsController(Carpool, $rootScope, $scope, User) {
    var vm = this;
    vm.today = new Date();
    vm.showLess = false;
    vm.carpools = [];
    getCarpools(vm.today);

    var userId = User.getCurrentUser()._id

    $rootScope.socket.emit('getRides');

    /*
     * Is constantly updating the rides
     */
    $rootScope.socket.on('updateClientRides', function(data){
      $scope.$apply(function(){
        vm.carpools = data;
        getCarpools(vm.today);
      });
    });
    
    function getCarpools(date) {
      vm.carpools = Carpool.filterByDate(date, vm.carpools, userId);
      //$rootScope.socket.emit('getRides');
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
      $rootScope.socket.emit('getRides');
      getCarpools(vm.today);
    }
  }

})();
