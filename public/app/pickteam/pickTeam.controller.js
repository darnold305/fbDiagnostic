//NEXT STEP
//0. Figure out why vm.users spits out something different inside the function vs. outside it.
//1. Take an input of favorite team
//2. Update user with their favorite team


(function() {
    'use strict';

    angular
      .module('app.landing')
      .controller('PickTeamController', PickTeamController);

    PickTeamController.$inject = ['$location'];

    function PickTeamController($location) {
      var vm = this;
      
      vm.firstName = localStorage.getItem('fbDiagName');
      vm.teams = teamColorData;
      vm.pickTeam = pickTeam;
      
      function pickTeam(team, key){
        localStorage.setItem('fbDiagTeam',team)
        localStorage.setItem('fbDiagTeamKey',key)
        $location.path('/diagnostic/one')
      }
    }
  
})();