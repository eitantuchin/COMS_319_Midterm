var count = 0;
var intervalId;
var gameRunning = false;

function getInputValue() {
    let stateName = document.forms["state_form"]["inputStateName"];
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
                        document.getElementById("state_form").reset();
                        count++;   
                    }
                });
            }
        }  
        if (count == 50) { // change to 50
            document.getElementById("score").textContent = "Score: 100%";
            alert("Great job! You win!");
            endGame();
        }
    }  
}

function startGame() {
    let username = document.forms["name_form"]["inputUsername"];

    clearInterval(intervalId);
    startTimer(5);
    gameRunning = true;
    
    var paths = document.querySelectorAll('.map-container svg path');
    paths.forEach(function (path) {
        path.style.fill = 'white';
    });
    count = 0;
    document.getElementById("score").textContent = "";

    document.getElementById("timer").style.display = 'block';
    document.getElementById("end_game").style.display = 'block';
    document.getElementById("state_form").style.display = 'block';
    document.getElementById("name_form").style.display = 'none';
}

function endGame() {
    gameRunning = false;
    clearInterval(intervalId);

    document.getElementById("timer").style.display = 'none';
    document.getElementById("end_game").style.display = 'none';
    document.getElementById("state_form").style.display = 'none';
    document.getElementById("name_form").style.display = 'block';
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
    var totalSeconds = durationInMinutes * 60;
    
    function updateTimer() {
      var minutes = Math.floor(totalSeconds / 60);
      var seconds = totalSeconds % 60;

      setTimer(minutes, seconds);

      if (totalSeconds <= 0) {
        clearInterval(intervalId);
        let score = 100 * (count / 50);
        document.getElementById("score").textContent = "Score: " + score + "%";
        alert("Game Over! Try again!");
        
      }
      totalSeconds--;
    }
    updateTimer();
    intervalId = setInterval(updateTimer, 1000);

}

function setTimer(minutes, seconds) {
    var timerElement = document.getElementById('timer');
    timerElement.textContent = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}