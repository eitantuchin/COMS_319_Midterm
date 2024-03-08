var count = 0;
var intervalId;
document.getElementById("myInput").disabled = true;
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
                });
            }
        }  
        if (count == 50) { // change to 50
            document.getElementById("myInput").disabled = true;
            alert("Great job! You win!");
            clearInterval(intervalId);
            // stop timer
        }
    }  
} 

function newGame() {
    clearInterval(intervalId);
    startTimer(5);
    document.getElementById("myInput").disabled = false;
    var paths = document.querySelectorAll('.map-container svg path');
    paths.forEach(function (path) {
        path.style.fill = 'white';
    });
    count = 0;
 
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
        document.getElementById("myInput").disabled = true;
        alert("Game Over! Try again!");
      }
      totalSeconds--;
    }
    updateTimer();
    intervalId = setInterval(updateTimer, 1000);

  }
