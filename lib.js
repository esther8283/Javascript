function over2(obj) {
    obj.src="./img/피스케2.jpg";
}
function out2(obj) {
    obj.src="./img/피스케3.gif";
}


// var img4 = document.getElementById("img4");
//         img4.addEventListener("mouseover", function() {
//             this.src="./img/피스케2.jpg"
//         });
//         img4.addEventListener("mouseout", function() {
//             this.src="./img/피스케3.gif"
//         });

var img4 = document.getElementById("img4");
        img4.addEventListener("mouseover", over3 );
        img4.addEventListener("mouseout", out3 );

function over3() {
    obj.src="./img/피스케2.jpg";
}
function out3() {
    obj.src="./img/피스케3.gif";
}