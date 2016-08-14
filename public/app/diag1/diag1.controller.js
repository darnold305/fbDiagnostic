
(function() {
    'use strict';

    angular
      .module('app.diag1')
      .controller('Diag1Controller', Diag1Controller);

    Diag1Controller.$inject = ['$scope', '$location', '$timeout', '$interval', 'TimerService'];

    function Diag1Controller($scope, $location, $timeout, $interval, TimerService) {
      var vm = this;
      
      $scope.model = {}
      $scope.model.timer = 
                { isTimeLeft: true,
                  isgameOver: false,
                  timeRemaining: '01:00'};
      vm.maxTime = 60;
      vm.gameStarted = false;

      
      vm.score = 0
      vm.maxScore = 0;
      vm.firstName = localStorage.getItem('fbDiagName').toUpperCase();
      vm.teamName = localStorage.getItem('fbDiagTeam');
      vm.teamKey = localStorage.getItem('fbDiagTeamKey');
      vm.currentPlayerArray = [];
      vm.positionsArray = positionsArray
      vm.checkAnswer = checkAnswer;
      vm.playerGuess = "";
      vm.displayRightAnswer = false
      vm.gameOver = false
      vm.correctPlayer = ""
      vm.displaysTheRightAnswer = displaysTheRightAnswer;
      vm.buildPlayerList = buildPlayerList;
      vm.displayTimer = displayTimer;
      
    
      //build array of players
      function buildPlayerList(){
        playerArray.forEach(function(player){
          if (player.Team === vm.teamKey) {
            vm.currentPlayerArray.push(player);
          };
        });
        vm.currentPlayerArray.forEach(function(player){
          player.Name = player.Name.toUpperCase();
          player.lastName = player.lastName.toUpperCase();
        });
        vm.maxScore = vm.currentPlayerArray.length;
        vm.gameStarted = true;
        vm.isTimeLeft = true
        vm.displayTimer();
      }
      
      function checkAnswer(player) {
        player = player.toUpperCase();
        vm.currentPlayerArray.forEach(function(e){
          if(!e.Guessed & (player === e.Name || player === e.lastName)) {
            e.Guessed = true;
            vm.playerGuess = "";
            vm.score++;
            vm.displaysTheRightAnswer(e)
            }
        });
      }
      
      function displaysTheRightAnswer(e){
        vm.correctPlayer = e;
        vm.displayRightAnswer = true;
          $timeout(function() {
            vm.displayRightAnswer = false;
          }, 2000)
      }
      
      function displayTimer() {
        TimerService.displayTimer($scope.model.timer, vm.maxTime);
      }
    }
})();