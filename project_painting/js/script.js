var btn = document.getElementById("btn-del-first");
btn.addEventListener("click", deleteFirst);

function deleteFirst() {
    document.getElementById('image-left').src = "images/sin_imagen.png";
}

var btn = document.getElementById("btn-del-second");
btn.addEventListener("click", deleteSecond);

function deleteSecond() {
    document.getElementById('image-right').src = "images/sin_imagen.png";
}

var btn = document.getElementById("btn-del-all");
btn.addEventListener("click", deleteAll);

function deleteAll() {
    document.getElementById('image-right').src = "images/sin_imagen.png";
    document.getElementById('image-left').src = "images/sin_imagen.png";
}

var btn = document.getElementById("btn-move");
btn.addEventListener("click", mover);
var change=1

function mover() {
   if (change==1){
    document.getElementById('image-left').src = "images/membrillos.jpg";
    document.getElementById('image-right').src = "images/mar.jpg";
    change=2;
}
else if (change==2) {
    document.getElementById('image-left').src = "images/mar.jpg";
    document.getElementById('image-right').src = "images/membrillos.jpg";
    change=1
}

    

}
