
document.addEventListener('DOMContentLoaded', function () {
    var paths = document.querySelectorAll('svg path');
    paths.forEach(function (path) {
        path.addEventListener('click', function () {
            var name = path.getAttribute('data-name');
            createStateInfoInFile(myStates, name);
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

            // Save state info in localStorage
            localStorage.setItem('stateInfo', JSON.stringify({
                state: state,
                flag: flag,
                img: img,
                founded: founded,
                pop: pop,
                capital: capital,
                area: area
            }));

            // Redirect to state_info.html
            window.location.href = 'state_info.html';
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