document.addEventListener('DOMContentLoaded', function () {
    // Retrieve state info from localStorage
    var stateInfo = JSON.parse(localStorage.getItem('stateInfo'));

    if (stateInfo) {
        var state = stateInfo.state;
        var flag = stateInfo.flag;
        var img = stateInfo.img;
        var founded = stateInfo.founded;
        var pop = stateInfo.pop;
        var capital = stateInfo.capital;
        var area = stateInfo.area;
        /*
        <style>
        * {
            overflow-y: auto; 
            min-height: 100vh;        
        }
        </style>
        */
       
        document.getElementById("px-3").innerHTML = 
        ` 
        <button type="button" onclick="flag = 1; redirect()">To Game</button>
        <button type="button" onclick="flag = 2; redirect()">Author Info</button>
        <button type="button" onclick="flag = 3; redirect()">Back to the Map</button>
        <h1>${state}</h1>
        <img src="${flag}" alt="${state} Flag" style="width: 40%; height: 40%">
        <img src="${img}" alt="${state} Image" style="width: 40%; height: 40%">
        <p>Founded: ${founded}</p>
        <p>Population: ${pop}</p>
        <p>Capital: ${capital}</p>
        <p>Area: ${area}</p>
        `;
    }
});

function redirect() {
    if (flag == 1) {
        window.location.href = 'states_game.html';
    }
    else if (flag == 2) {
        window.location.href = 'index.html'; 
    }
    else {
        window.location.href = 'states_map.html';
    }
}