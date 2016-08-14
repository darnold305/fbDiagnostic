(function() {
    'use strict';

    angular
      .module('app.diag3')
      .controller('Diag3Controller', Diag3Controller)

    Diag3Controller.$inject = ['$location', '$timeout', '$scope', 'TimerService'];

    function Diag3Controller($location, $timeout, $scope, TimerService) {
      var vm = this;
      
      vm.firstName = localStorage.getItem('fbDiagName').toUpperCase();
      vm.teamName = localStorage.getItem('fbDiagTeam');
      vm.teamKey = localStorage.getItem('fbDiagTeamKey');
      vm.score = 0;
      
      vm.displayTimer = displayTimer;
      
      function displayTimer() {
        TimerService.displayTimer($scope.model.timer, vm.maxTime);
      }

    };
  
})();