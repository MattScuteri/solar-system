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
    planets.push(new Planet(100, 300, 250, Math.PI/2, 10));
    planets.push(new Planet(150, 300, 250, Math.PI/2, 10));
    planets.push(new Planet(300, 150, 300, 0, 1));
    planets.push(new Planet(350, 150, 300, 0, 1));
    planets.push(new Planet(400, 300, 0, 0, 1000000)); //SUN
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