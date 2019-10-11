var canvas;
var ctx;

var planets = [];

function init() {
    //initialize canvas
    canvas = document.getElementById('canvas');
    //make canvas the size of the browser window
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    ctx = canvas.getContext('2d');

    createPlanets();

    //recall this set of functions every 10 milliseconds
    setInterval(function() {
        // updates orbital positions and circular angles of planets
        animatePlanets(0.01);
        // entire canvas in preparation for planet re-draw
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // re-draw planets with new values
        drawPlanets();
        // calculate gravitational forces between all bodies
        orbit();
    }, 10);
}

function createPlanets() {
    //ensuring all planets are spawned somewhere towards the middle of screen
    var mid_x = innerWidth / 2;
    var mid_y = innerHeight / 2;

    //taking VERY significant liberties with scales - the inner solar system doesn't fit nicely in one window

    //MARS
    planets.push(new Planet(mid_x - 314, mid_y, 30, Math.PI/2, 63900, 2, "red"));
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
    //loop through array of planets calling draw method on each
    for(let i = 0; i < planets.length; i++) {
        planets[i].draw(ctx);
    }
}

function animatePlanets(time) {
    //looping through the planets array to redraw new positions - passing in a time argument to help with acceleration calculations
    for(let i = 0; i < planets.length; i++) {
        planets[i].animate(time);
    }
}

function orbit() {
    // pass planet array into Gravity class to do the physics
    var physics = new Gravity(planets);

    physics.calcGrav();
}