
document.addEventListener('DOMContentLoaded', function () {
    var paths = document.querySelectorAll('.map-container svg path');

    paths.forEach(function (path) {
        path.addEventListener('click', function () {
            var name = path.getAttribute('data-name');
            createStateInfoInFile(myStates, name)           // Pass the state ID to the handler function    
        });
    });
});

fetch("data.json")
.then((response) => response.json())
.then((data) => {
    myStates = data;
});

function createStateInfoInFile(myStates, name) {
    for (var i = 0; i < myStates.states.length; i++) {
        if (name === myStates.states[i].state) {
            var state = myStates.states[i].state;
            var flag = myStates.states[i].flag;
            var img =  myStates.states[i].img;
            var founded = myStates.states[i].founded;
            var pop =  myStates.states[i].population;
            var capital =  myStates.states[i].capital;
            var area =  myStates.states[i].area;
            document.body.innerHTML = 
            ` <button type = "button" onclick="flag = 1; redirect()">To Game</button>
            <button type = "button"  onclick="flag = 2; redirect()">Author Info</button>
            <button type = "button"  onclick="flag = 3; redirect()">Back to the Map</button>
            <h1>${state}</h1>
            <img src="${flag}" alt="${state} Flag" style = "width: 40%; height: 40%">
            <img src="${img}" alt="${state} Image" style = "width: 40%; height: 40%">
            <p>Founded: ${founded}</p>
            <p>Population: ${pop}</p>
            <p>Capital: ${capital}</p>
            <p>Area: ${area}</p>
           
            `;
        }
    }
}

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