document.querySelectorAll(".allPaths").forEach(e => {
    e.addEventListener("mouseover", function() {
        window.onmousemove=function(j) {
            x = j.clientX;
            y = j.clientY;
            document.getElementById("data-name").style.top = y - 20 + "px";
            document.getElementById("data-name").style.top = x - 20 + "px";

        }
        e.style.fill = "green"
        document.getElementById("namep").innerText = e.id;
        document.getElementById("data-name").style.opacity = 1;

    })
    e.addEventListener("mouseleave", function() {
        e.style.fill = "white";
        document.getElementById("data-name").style.opacity = 0;
    })
})