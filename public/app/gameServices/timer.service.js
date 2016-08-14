(function(){
  'use strict';
  
  angular
    .module('app.gameServices')
    .factory('TimerService', TimerService)
  
  TimerService.$inject = ['$interval'];
  
  function TimerService($interval) {
    
    var service = {
      displayTimer: displayTimer
    };
    
    return service;
    
    ////////////////
    
    function displayTimer(timer, maxTime) {
      timer.isTimeLeft = true;
      var totalSeconds = maxTime
      function getElapsedTimeString(totalSeconds) {
        function prettyTimeString(num) {
          return ( num < 10 ? "0" : "" ) + num;
        }

      var totalSeconds = maxTime - elapsedSeconds;
      var minutes = Math.floor(totalSeconds / 60);
      totalSeconds = totalSeconds % 60;
      var seconds = Math.floor(totalSeconds);

      // Pad the minutes and seconds with leading zeros, if required
      minutes = prettyTimeString(minutes);
      seconds = prettyTimeString(seconds);

      // Compose the string for display
      var currentTimeString = minutes + ":" + seconds;
        return currentTimeString;
      };  
      
      var elapsedSeconds = 0;
//      vm.isTimeLeft = true;
      
      var interval = $interval(function() {
        elapsedSeconds = elapsedSeconds + 1;
        if (elapsedSeconds === totalSeconds){
          timer.isTimeLeft = false;
          timer.isGameOver = true;
          $interval.cancel(interval);
        }
        else {
          timer.timeRemaining = getElapsedTimeString(elapsedSeconds);
        }
        }, 1000);
    }
  }
//  

     
  
})()