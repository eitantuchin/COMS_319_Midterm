// Retrieve leaderboard from local storage
var leaderboardString = localStorage.getItem('leaderboard');
var leaderboard = JSON.parse(leaderboardString);

if (leaderboard == null) {
    leaderboard = [];
}

// Get leaderboard table from DOM
const tableBody = document.getElementById("leaderboard-table").getElementsByTagName("tbody")[0];

if (leaderboard.length != 0) {
    document.getElementById("table-empty").style.display = 'none';
    document.getElementById("leaderboard-table").style.display = 'block';

    // Loop through leaderboard entries and add them to the table
    for (const entry of leaderboard) {
        const tableRow = document.createElement("tr");
        const nameCell = document.createElement("td");
        const scoreCell = document.createElement("td");

        nameCell.textContent = entry.user;
        scoreCell.textContent = entry.score;

        tableRow.appendChild(nameCell);
        tableRow.appendChild(scoreCell);
        tableBody.appendChild(tableRow);
    }
}

function changePage() {
    if (flag == 1) {
      window.location.href = 'states_game.html';
    }
    else {
      window.location.href = 'states_map.html';
    }
}