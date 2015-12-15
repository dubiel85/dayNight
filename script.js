var sky = document.getElementById("sky");
var orb = document.getElementById("orb");
var time = document.getElementById("time");

var day = "day";
var night = "night";

function changeTime() {
    if(time.getAttribute("class") == day)
        dayToNight(time);
    else
        nightToDay(time);
}

function dayToNight(obj) {
    obj.setAttribute("class", night);
}

function nightToDay(obj) {
    obj.setAttribute("class", day);
}

time.addEventListener("click", changeTime);