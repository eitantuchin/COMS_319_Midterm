var score = 0;
var intervalId;
var gameRunning = false;
var playerName;

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
            inputStateName = inputStateName.toLowerCase();
            inputStateName = inputStateName.charAt(0).toUpperCase() + inputStateName.slice(1);
            if (inputStateName === myStates.states[i].state) {
               paths.forEach(function (path) {
                    var name = path.getAttribute('data-name');
                    if (name == inputStateName && !guessedAlready(path)) {
                        path.style.fill = 'green';
                        document.getElementById("state_form").reset();
                        score++;   
                    }
                });
            }
        }  
        if (score == 50) { // change to 50
            document.getElementById("score").textContent = "Score: 100%";
            alert("Great job! You win!");
            endGame();
        }
    }  
}

function startGame() {
    playerName = document.forms["name_form"]["inputUsername"].value;
    console.log("Game starting for player %s.", playerName);

    // Start a new timer and set the game to running
    gameRunning = true;
    clearInterval(intervalId);
    startTimer(5);
    
    var paths = document.querySelectorAll('.map-container svg path');
    paths.forEach(function (path) {
        path.style.fill = 'white';
    });
    score = 0;
    document.getElementById("score").textContent = "";

    // Set the UI to in-game state
    document.getElementById("timer").style.display = 'inline-block';
    document.getElementById("end_game").style.display = 'inline-block';
    document.getElementById("state_form").style.display = 'inline-block';
    document.getElementById("name_form").style.display = 'none';
}

function endGame() {
    console.log("Game ending for player %s with score %d.", playerName, score);

    // Set game running to false and stop the timer
    gameRunning = false;
    clearInterval(intervalId);

    // Add player to leaderboard
    var leaderboardString = localStorage.getItem('leaderboard');
    var leaderboard = JSON.parse(leaderboardString);

    if (leaderboard == null) {
        leaderboard = [];
    }

    leaderboard.push({"user": playerName, "score": score});
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    console.log(leaderboard);

    // Reset UI to pre-game state
    document.getElementById("timer").style.display = 'none';
    document.getElementById("end_game").style.display = 'none';
    document.getElementById("state_form").style.display = 'none';
    document.getElementById("name_form").style.display = 'inline-block';
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
    else if (flag == 2) {
        window.location.href = 'index.html';
    }
    else {
        window.location.href="leaderboard.html";
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
        let score = 100 * (score / 50);
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