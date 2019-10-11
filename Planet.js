class Planet {
    constructor(x, y, speed, angle, mass, radius, color) {
        this.x = x;
        this.y = y;
        //trig functions to determine circular path of planet
        this.speed_x = speed * Math.cos(angle);
        this.speed_y = speed * Math.sin(angle);
        this.mass = mass;
        //set initial angle variables to add later
        this.angle_x = 0;
        this.angle_y = 0;
        this.radius = radius;
        this.color = color
    }



    draw() {
        // canvas drawing functions
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        console.log("done!");
    }

    animate(time) {
        console.log('allegedly animating');
        this.speed_x += this.angle_x * time;
        this.speed_y += this.angle_y * time;

        this.x += this.speed_x * time;
        this.y += this.speed_y * time;

        this.angle_x = 0;
        this.angle_y = 0;
    }
}