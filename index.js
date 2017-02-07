var yoff = 0.0;
function setup() {
    createCanvas(800, 800);
}
function draw() {
    background(0);
    translate(width / 2, height / 2);
    var radius = 150;
    rotate((PI / 2) * yoff);
    beginShape();
    var xoff = 0;
    for (var a = 0; a < TWO_PI; a += 0.005) {
        var offset = map(noise(xoff, yoff), 0, 1, -300, 100);
        var r = radius + offset;
        var x = r * cos(a);
        var y = r * sin(a);
        vertex(x, y);
        xoff += 1;
    }
    endShape();

    yoff += 0.01;
}