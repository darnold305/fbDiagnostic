(function() {
    'use strict';

    angular
      .module('app.diag2')
      .controller('Diag2Controller', Diag2Controller)
      .directive('sibs', sibs);

    Diag2Controller.$inject = ['$location', '$timeout', '$scope', 'TimerService'];

    function Diag2Controller($location, $timeout, $scope, TimerService) {
      var vm = this;
      
      $scope.model = {}
      $scope.model.timer = 
                { isTimeLeft: false,
                  timeRemaining: '01:00',
                  isGameOver: false};
      vm.maxTime = 60;
      
      vm.firstName = localStorage.getItem('fbDiagName').toUpperCase();
      vm.teamName = localStorage.getItem('fbDiagTeam');
      vm.teamKey = localStorage.getItem('fbDiagTeamKey');
      vm.gameStarted = false;
      vm.score = 0;
      vm.scoresByTeam = []; 
      vm.answers = [];
      
      vm.displayTimer = displayTimer;
      vm.getScoresByTeam = getScoresByTeam;
      vm.getAnswers = getAnswers;
      vm.checkAnswers = checkAnswers;
      
      function getScoresByTeam(){
        scores.forEach(function(game){
          var winner = '';
          var opponentScore = '';
          var opponent = '';
          var teamScore = '';
          if (game.AwayTeam === vm.teamKey) {
            opponent = '@ ' + game.HomeTeam;
            opponentScore = game.HomeScore;
            teamScore = game.AwayScore;
            if (game.AwayScore > game.HomeScore) {
              winner = vm.teamKey;
            }
            else {
              winner = opponent;
            }
            vm.scoresByTeam.push(
              {
              week: game.Week,
              teamScore: teamScore,
              opponent: opponent,
              opponentScore: opponentScore,
              winner: winner,
              guess: '',
              }
            )
          }
          else if (game.HomeTeam === vm.teamKey) {
            opponent = 'vs. ' + game.AwayTeam;
            opponentScore = game.AwayScore;
            teamScore = game.HomeScore;
            if (game.HomeScore > game.AwayScore){
              winner = vm.teamKey;
            }
            else {
              winner = opponent;
            }
            vm.scoresByTeam.push(
              {
              week: game.Week,
              teamScore: teamScore,
              opponent: opponent,
              opponentScore: opponentScore,
              winner: winner,
              guess: '',
              }
            )
          }
        })
        vm.gameStarted = true;
        vm.displayTimer();
        return;
      }
      
      function getAnswers($index, team){
        vm.scoresByTeam[$index].guess = team
      }
      
      function checkAnswers(){
        $scope.model.timer.isGameOver = true;
        var i=0;
        for (i=0;i<vm.scoresByTeam.length;i++){
          if (vm.scoresByTeam[i].winner === vm.scoresByTeam[i].guess){
            vm.scoresByTeam[i].answeredCorrectly = true;
            vm.score++
          }
          else {
            vm.scoresByTeam[i].answeredCorrectly = false;
          }
        }
        console.log(vm.scoresByTeam)
      }
      
      function displayTimer() {
        TimerService.displayTimer($scope.model.timer, vm.maxTime);
      }

  };
  
    function sibs(){
      return {
        link: function(scope, element, attrs) {
          element.bind('click', function() {
            element.parent().children().removeClass('clicked');
            element.addClass('clicked');
          })
        },
      }
    };  
  
})();
