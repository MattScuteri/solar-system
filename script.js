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
        updateSystem();
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

function updateSystem() {
    var physics = new Gravity(planets);

    physics.calcGrav();

    // var G = 1;

    // for(let i = 0; i < planets.length; i++) {
    //     for(let j = 0; j < planets.length; j++) {
    //         if( i === j) continue;
    //         var b1 = planets[i];
    //         var b2 = planets[j];

    //         var dist = Math.sqrt(
    //             (b1.x - b2.x) * (b1.x - b2.x) +
    //             (b1.y - b2.y) * (b1.y - b2.y)
    //         );

    //         var force = G*(b1.mass * b2.mass) / dist/dist;

    //         var mass_x = (b2.x - b1.x) / dist;
    //         var mass_y = (b2.y - b1.y) / dist;

    //         b1.angle_x += mass_x * force / b1.mass;
    //         b1.angle_y += mass_y * force / b1.mass;

    //         b2.angle_x -= mass_x * force / b2.mass;
    //         b2.angle_y -= mass_y * force / b2.mass;
    //     }
    // }
}