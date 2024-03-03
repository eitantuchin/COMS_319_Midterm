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
                    if (name == inputStateName) {
                        path.style.fill = 'green';
                    }
                });
            }
        }   
    }  
} 
function redirect() {
    if (flag == 1) {
        window.location.href = 'states_map.html';
    }
    else {
        window.location.href = 'index.html';
    }
}
