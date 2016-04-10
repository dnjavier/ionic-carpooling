(function() {
  'use strict';

  angular
      .module('carpooling')
      .service('Carpool', Carpool);

  function Carpool() {
    var data = [
    {
      _id: 1,
      from: {
        province: 'Heredia',
        district: 'San Francisco'
      },
      to: {
        province: 'San Jose',
        district: 'Tournon'
      },
      departureTime: '3:00 p.m.',
      date: new Date(),
      seatsAvailable: 4,
      owner: {
        _id: 2,
        image: 'https://fbcdn-photos-h-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/s160x160/11078274_906386332717993_3210878922484723790_n.jpg?oh=77360bf48912e0a3a0ff884fb8fb5e78&oe=577FD3A5&__gda__=1468287893_f93b7d49e55d7af60a155951a3ae52d9',
        name: 'Felix',
        lastname: 'Vasquez',
        city: 'San Francisco, Heredia',
        age: '18',
        study: 'Informatica',
        email: 'jvasquezx000@ulacit.ed.cr',
        whatsapp: '6047-1781',
        since: '26 Mar 2016'
      },
      joinedUsers: [
      {
        _id: 1,
        image: 'http://res.cloudinary.com/dlxqbg8py/image/upload/v1458243700/vdztqxzizewliwuri4v3.jpg',
        name: 'Javier',
        lastname: 'Delgado',
        city: 'Escazu, San Jose',
        age: '21',
        study: 'Informatica',
        email: 'jdelgadon428@ulacit.ed.cr',
        whatsapp: '8850-5706',
        since: '20 Mar 2016'
      },
      ]
    },
    ]

    this.getOne = getOne;
    this.getByDate = getByDate;
    this.getAll = getAll;
    this.joinCar = joinCar;
    this.getOrigins = getOrigins;
    this.getDestinies = getDestinies;

    function getOne(_id) {
      for(var i=0; i<data.length; i++){
        if(data[i]._id == _id){
          return data[i];
        }
      }
    }

    function getByDate(date) {
      var arr = [];
      var day = date.getDate();
      var month = date.getMonth();
      var year = date.getFullYear();

      for(var i=0; i<data.length; i++){
        var dDay = data[i].date.getDate();
        var dMonth = data[i].date.getMonth();
        var dYear = data[i].date.getFullYear(); 

        if(year == dYear 
          && month == dMonth
          && day == dDay) {
          arr.push(data[i]);          
        }
      }

      return arr;
    }

    function getAll() {
      return data;
    }

    function joinCar(user, carId){
      getOne(carId).people.push(user);
    }

    function getOrigins() {
      var origins = [];
      for(var i=0; i<data.length; i++){
        origins.push(data[i].origin);
      }
      return origins;
    }

    function getDestinies() {
      var destinies = [];
      for(var i=0; i<data.length; i++){
        destinies.push(data[i].destiny);
      }
      return destinies;
    }

  }

})();
