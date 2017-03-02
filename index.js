var yoff = 0.0;
/*
//Cool spinning thing in p5js
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent('canvas');
}
function draw() {
    background(0);
    translate(width / 2, height / 2);
    var radius = 150;
    rotate((PI / 2) * yoff);
    beginShape();
    var xoff = 0;
    for (var a = 0; a < TWO_PI; a += 0.08) {
        var r = radius + map(noise(xoff, yoff), 0, 1, -100, 300);
        vertex(r * cos(a), r * sin(a));
        xoff += 1;
        fill(0, 255, 255, 50);
    }
    endShape();
    yoff += 0.01;
}
*/
$(document).ready(function {
    navigator.mediadevices.getUserMedia(
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
})