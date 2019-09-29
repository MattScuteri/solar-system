class Planet {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    getSize() {
        let size = this.radius / 100;
        console.log(size);
        return size;
    }

    getDistance() {
        let distance = this.y / 100;
        console.log(distance);
        return distance;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.getSize(), 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
        console.log("done!");
    }
}