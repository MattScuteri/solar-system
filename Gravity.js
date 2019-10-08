// Force of gravity:

// F1 = F2 = (G * m1 * m2) / r*r

// G = 6.67 * 10 ^ -11

class Gravity {
    constructor(planets) {
        this.planets = planets;
    }

    calcGrav() {
        console.log('calculating gravity');

        var bigG = 100;

        for(let i = 0; i < this.planets.length; i++) {
            for(let j = 0; j < this.planets.length; j++) {
                if(i === j) continue;

                let planet_1 = this.planets[i];
                let planet_2 = this.planets[j];

                var distance = Math.sqrt(
                    Math.pow((planet_1.x - planet_2.x), 2) + Math.pow((planet_1.y - planet_2.y), 2)
                );

                var gravity = bigG * (planet_1.mass * planet_2.mass) / Math.pow(distance, 2);

                var mass_x = (planet_2.x - planet_1.y) / distance;
                var mass_y = (planet_2.y - planet_1.y) / distance;

                planet_1.angle_x += mass_x * gravity / planet_1.mass;
                planet_1.angle_y += mass_y * gravity / planet_1.mass;

                planet_2.angle_x -= mass_x * gravity / planet_2.mass;
                planet_2.angle_y -= mass_y * gravity / planet_2.mass;
            }
        }
    }
}