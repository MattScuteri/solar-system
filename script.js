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
    planets.push(new Planet(mid_x - 314, mid_y, 24, Math.PI/2, 63900, 2, "red"));
    //EARTH
    planets.push(new Planet(mid_x - 206, mid_y, 39, Math.PI/2, 597200, 4, "blue"));
    //VENUS
    planets.push(new Planet(mid_x, mid_y + 149, 37, 0, 486700, 4, "orange"));
    //MERCURY
    planets.push(new Planet(mid_x, mid_y + 80, 47, 0, 32300, 1, "brown"));
    //SUN
    planets.push(new Planet(mid_x, mid_y, 0, 0, 2000000000000000, 24, "yellow"));
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