//(function() {
//    'use strict';
//
//    angular
//      .module('app.landing')
//      .controller('LandingController', LandingController);
//
//    LandingController.$inject = ['$location', '$firebaseArray'];
//
//    function LandingController($location, $firebaseArray) {
//      var vm = this;
//      var fireUsers = firebase.database().ref('users');
//
//      function User(){
//        this.name = '';
//        this.team = '';
//        this.score = '';
//      }
//      
//      vm.newUser = new User();
//      vm.user = $firebaseArray(fireUsers)
//      vm.addUser = addUser
//      
//      function addUser() {
//        vm.user.$add(vm.newUser)
//        vm.newUser = new User
//        localStorage.setItem('fbDiagName','Darnold')
//        $location.path('/pickTeam')
//      }
//    }
//})();