var count = 0;
function getInputValue() {
    let stateName = document.forms["game_form"]["inputStateName"];
    let inputStateName = stateName.value;
   

    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            myStates = data;
        });
    checkStateCondition(myStates);
    function checkStateCondition(myStates) {
        var paths = document.querySelectorAll('.map-container svg path');
        for (var i = 0; i < myStates.states.length; i++) {
            if (inputStateName === myStates.states[i].state) {
               paths.forEach(function (path) {
                    var name = path.getAttribute('data-name');
                    if (name == inputStateName && !guessedAlready(path)) {
                        path.style.fill = 'green';
                        document.getElementById("game_form").reset();
                        count++;
                    
                    }
                    if (count == 1) {
                        timerElement.textContent = "5:00";
                        totalSeconds = 300;
                    }
                });
            }
        }  
    }  
} 

function guessedAlready(path) {
    if (path.style.fill == 'green') {
        return true;
    }
    return false;
}

function redirect() {
    if (flag == 1) {
        window.location.href = 'states_map.html';
    }
    else {
        window.location.href = 'index.html';
    }
}

function startTimer(durationInMinutes) {
    var timerElement = document.getElementById('timer');
    var totalSeconds = durationInMinutes * 60;
    
    function updateTimer() {
      var minutes = Math.floor(totalSeconds / 60);
      var seconds = totalSeconds % 60;

      timerElement.textContent = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

      if (totalSeconds <= 0) {
        clearInterval(intervalId);
        alert("Game Over! Try again!");
        timerElement.textContent = "5:00"
        totalSeconds = 300;
      }

      totalSeconds--;
    }
    updateTimer();
    var intervalId = setInterval(updateTimer, 1000);
  }
// do this in function startGame() when button is pressed
  startTimer(5);