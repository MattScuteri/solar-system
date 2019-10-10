var canvas;
var width;
var height;
var ctx;

var planets = [];

function init() {
    canvas = document.getElementById('canvas');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    ctx = canvas.getContext('2d');

    createPlanets();

    setInterval(function() {
        animatePlanets(0.01);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawPlanets();
        orbit();
    }, 10);
}

function createPlanets() {
    var mid_x = innerWidth / 2;
    var mid_y = innerHeight / 2;

    // scale of inner solar system in-px
    // sun {radius: 2.4, x-position: 0}
    // mercury {radius: .0005, x-position: 200 }
    // venus {radius: .04, x-position: 372.48}
    // earth {radius: .04 , x-position: 515.52}
    // mars {radius: .02, x-position: 785.28}

    //MARS
    planets.push(new Planet(mid_x + 157.16, mid_y, 250, Math.PI/2, 639, 2));
    //EARTH
    planets.push(new Planet(mid_x + 103, mid_y, 250, Math.PI/2, 5972, 4));
    //VENUS
    planets.push(new Planet(mid_x + 74.5, mid_y, 300, 0, 4867, 4));
    //MERCURY
    planets.push(new Planet(mid_x + 40, mid_y, 300, 0, 323, .5));
    //SUN
    planets.push(new Planet(mid_x, mid_y, 0, 0, 200000, 24));
}

function drawPlanets() {
    for(let i = 0; i < planets.length; i++) {
        planets[i].draw(ctx);
    }
}

function animatePlanets(time) {
    for(let i = 0; i < planets.length; i++) {
        planets[i].animate(time);
    }
}

function orbit() {
    var physics = new Gravity(planets);

    physics.calcGrav();
}