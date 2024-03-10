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
        <div class="centered">
            <h1>${state}</h1>
        </div>
        <div class="centered">
            <img id="flag" src="${flag}" alt="${state} Flag">
            <img id="map" src="${img}" alt="${state} Image">
        </div>
        <div class="centered" id="state-info">
            <p><b>Founded:</b> ${founded}</p>
            <p><b>Population:</b> ${pop}</p>
            <p><b>Capital:</b> ${capital}</p>
            <p><b>Area:</b> ${area} sq mi</p>
        </div>
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