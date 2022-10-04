let time = 10;
let countdown = document.getElementById("countdown");
let center = document.getElementById("center");
let timer = setInterval(counter, 1000);
document.getElementById("launched").style.display = "none";

function counter() {
countdown.innerHTML = time;
time--;

if (time == -1) clearInterval(timer);

if (time == -1) {
    var img = document.createElement("img");
    var imgdiv = document.createElement("div");
    img.src = "img/Rocket Launching.jpg";
    img.setAttribute(
    "style",
    "width:200px; height:200px; justify-content: center; align-items: center; margin-top: 95px;"
    );
    document.getElementById("countdown").style.display = "none";
    document.getElementById("launched").style.display = "block";
    center.insertAdjacentElement("afterbegin", img);
}
}