document.addEventListener('DOMContentLoaded', function () {
    var stateInfo = JSON.parse(localStorage.getItem('stateInfo'));

    if (stateInfo) {
        var state = stateInfo.state;
        var flag = stateInfo.flag;
        var img = stateInfo.img;
        var founded = stateInfo.founded;
        var pop = stateInfo.pop;
        var capital = stateInfo.capital;
        var area = stateInfo.area;
       
        document.getElementById("insert").innerHTML = 
        ` 
        <h1>${state}</h1>
        <img src="${flag}" alt="${state} Flag" style="width: 45%; height: 45%">
        <img src="${img}" alt="${state} Image" style="width: 45%; height: 45%">
        <p>Founded: ${founded}</p>
        <p>Population: ${pop}</p>
        <p>Capital: ${capital}</p>
        <p>Area: ${area} sq mi</p>
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