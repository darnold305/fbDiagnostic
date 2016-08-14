(function() {
    'use strict';

    angular
      .module('app.landing')
      .controller('LandingController', LandingController);

    LandingController.$inject = ['$location'];

    function LandingController($location) {
      var vm = this;
      
      vm.firstName = "";
      vm.addUser = addUser;
      
      function addUser() {
        localStorage.setItem('fbDiagName',vm.firstName);
        $location.path('/pickteam');
      }
    }
})();