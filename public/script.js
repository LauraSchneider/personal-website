$(document).ready(function() {
    $('#fullpage').fullpage();
});

var projects = document.getElementsByClassName("project");
var dots = document.getElementsByClassName("dot");
var isTransitioning = false;
var curProject = 0;
var onDeck = 1;
var timerID;

function moveProjects() {
    projects[curProject].classList.remove("onscreen");
    projects[curProject].classList.add("exit");
    projects[onDeck].classList.add("onscreen");

    setDot();

    curProject= onDeck;
    onDeck += 1;

    if (onDeck >= projects.length) {
        onDeck = 0;
    }
    isTransitioning = true;
}

function setDot() {
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("current-dot");
    }
    dots[onDeck].classList.add("current-dot");
}

timerID = setTimeout(moveProjects, 3000);

document.addEventListener("transitionend", function(e) {
    if (!e.target.classList.contains("exit")) {
        return;
    }
    e.target.classList.remove("exit");
    timerID = setTimeout(moveProjects, 3000);
    isTransitioning = false;
});

dots = [].slice.call(dots);
dots.forEach(function(dot, i) {
    dot.addEventListener("click", function() {
        if (isTransitioning) {
            return;
        }
        clearTimeout(timerID);

        onDeck = i;

        moveProjects();
    });
});

//FORM SECTION

//
// input.on('click', function(e) {
//     e.preventDefault();
//     const input = $('input[name="name"]'.val());
//
//     console.log(input);
// }
