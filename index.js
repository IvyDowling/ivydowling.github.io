var yoff = 0.0;
function setup() {
    createCanvas(800, 800);
    noStroke();
}
function draw() {
    background(0);
    translate(width / 2, height / 2);
    var radius = 150;
    rotate((PI / 2) * yoff);
    beginShape();
    var xoff = 0;
    for (var a = 0; a < TWO_PI; a += 1) {
        var offset = map(noise(xoff, yoff), 0, 1, -400, 400);
        var r = radius + offset;
        var x = r * cos(a);
        var y = r * sin(a);
        vertex(x, y);
        xoff += 1;
    }
    endShape();

    yoff += 0.01;
}
/*
$(document).ready(function (){
    navigator.getUserMedia(
        { audio: false, video: true},
        function (stream){
            var v2 = document.getElementById("video");
            if (v2.mozSrcObject !== undefined) {
                v2.mozSrcObject = stream;
            } else {
                v2.src = (window.URL && window.URL.createObjectURL(stream))|| stream;
            }
            v2.play();
        },
        function(error){
            console.log(error);
        });
});
*/
