(function() {
  'use strict';

  angular
    .module('carpooling')
    .service('User', User);

  function User($http, $rootScope) {
    var data = [{
      _id: 1,
      image: 'http://res.cloudinary.com/dlxqbg8py/image/upload/v1458243700/vdztqxzizewliwuri4v3.jpg',
      name: 'Javier',
      lastname: 'Delgado',
      city: {
        province: {
          value: '1',
          name: 'San Jose'
        },
        district: {
          value: '1',
          name: 'Escazu'
        }
      },
      age: '21',
      study: {
        value: 'se',
        name: 'Software Engineering'
      },
      email: 'jdelgadon428@ulacit.ed.cr',
      whatsapp: 88505706,
      since: '20 Mar 2016'
    },
    {
      _id: 2,
      image: 'https://fbcdn-photos-h-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/s160x160/11078274_906386332717993_3210878922484723790_n.jpg?oh=77360bf48912e0a3a0ff884fb8fb5e78&oe=577FD3A5&__gda__=1468287893_f93b7d49e55d7af60a155951a3ae52d9',
      name: 'Felix',
      lastname: 'Vasquez',
      city: {
        province: {
          value: '4',
          name: 'Heredia'
        },
        district: {
          value: '5',
          name: 'San Francisco'
        }
      },
      age: '18',
      study: {
        value: 'se',
        name: 'Software Engineering'
      },
      email: 'jvasquezx000@ulacit.ed.cr',
      whatsapp: '6047-1781',
      since: '26 Mar 2016'
    }
    ];

    this.getOne = getOne;
    this.setCurrentUser = setCurrentUser;
    this.getCurrentUser = getCurrentUser;
    this.create = create;
    this.update = update;
    this.login = login;
    this.logout = logout;

    function getOne(userId) {
      var url = 'https://carpool-ulacit.rhcloud.com/usuario/' + userId;
      return $http.get(url);
    }

    function setCurrentUser(user){      
      $rootScope.current = user;
    }

    function getCurrentUser(){
      return $rootScope.current;
    }

    function create(user){
      return $http.post('https://carpool-ulacit.rhcloud.com/usuario/registrar', user);
    }

    function update(user){
      return $http.put('https://carpool-ulacit.rhcloud.com/usuario/actualizar', user);
    }

    function login(user){
      return $http.post('https://carpool-ulacit.rhcloud.com/login', user);
    }

    function logout(){
      $rootScope.current = {};
    }

  }

})();
