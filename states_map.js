
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
            window.location.href = 'state_info.html';
            document.body.innerHTML =  `<h1>${state}</h1>
            <img src="${flag}" alt="${state} Flag">
            <img src="${img}" alt="${state} Image">
            <p>Founded: ${founded}</p>
            <p>Population: ${pop}</p>
            <p>Capital: ${capital}</p>
            <p>Area: ${area}</p>
            `;
            
            
        }
    }
}