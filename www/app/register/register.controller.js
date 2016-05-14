(function() {
  'use strict';

  angular
    .module('carpooling')
    .controller('RegisterController', RegisterController);

  function RegisterController($stateParams, User, $state, Studies, Cities) {
    var vm = this;
    
    vm.Studies = Studies;
    vm.Cities = Cities;
    vm.allStudies = getAllStudies();
    vm.allCities = getAllCities();

    vm.User = User;
    vm.userId = $stateParams.userId;
    vm.route = $stateParams.lastState;
    vm.edit = false;
    
    if(vm.userId != ''){
      vm.edit = true;
    }
    
    if(vm.edit){
      vm.user = User.getCurrentUser();
    }

    /*
     * Register a new user to DB
     */
    vm.reg = function(user) {
      if(!validateFields(user)){
        return;
      }
      
      vm.User.create(user).then(function success(res){
        vm.User.setCurrentUser(res.data);
        $state.go('profile', {_id: res.data._id});
        
      }, function error(res){
        console.log('error while creating user');
      });
    }

    /*
     * When updating an user to DB
     */
    vm.save = function(user){
      if(!validateFields(user)){
        return;
      }

      vm.User.create(user).then(function success(res){
        vm.User.setCurrentUser(res.data);
        $state.go('profile');
        
      }, function error(res) {
        console.log('error while creating user');
      });
    }

    /*
     *  Get all the cantons from DB when a province
     *  is selected.
     */
    vm.getCantons = function(province){
      vm.Cities.getCantons(province).then(function(res){
        vm.allCantons = res.data;
      });
    }

    /*
     *  Get all the study fields from DB
     */
    function getAllStudies(){      
      vm.Studies.getAll().then(function(res){
        vm.allStudies = res.data;
      });
    }

    /*
     *  Get all the cities from DB
     */
    function getAllCities(){      
      vm.Cities.getAll().then(function(res){
        vm.allCities = res.data;
      });
    }

    /*
     * Validate each field from html
     */
    function validateFields(user){
      var good = false;
      if(user !== undefined){
        good = true;

        if(user.name.length <= 0){
          good = false;
        }
        if(user.lastname.length <= 0){
          good = false;
        }
        if(user.age < 15){
          good = false;
        }
        if(user.city.province.value == ''){
          good = false;
        }
        if(user.city.canton.value == ''){
          good = false;
        }
        if(user.study.value == ''){
          good = false;
        }
        if(user.vehicleId == ''){
          good = false;
        }
        if(user.email == ''){
          good = false;
        }
        if(user.whatsapp <= 0){
          good = false;
        }
        
        /*
         * Must check if the user uploads something
         */
        user.image = 'http://res.cloudinary.com/dlxqbg8py/image/upload/v1460263761/profile-icon_tuhgvs.png';
      }
      return good;
    }
    
  }

})();
