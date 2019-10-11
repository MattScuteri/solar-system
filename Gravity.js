// Force of gravity:

// F1 = F2 = (G * m1 * m2) / r*r

// G = 6.67 * 10 ^ -11

class Gravity {
    constructor(planets) {
        // pass in current state of planets
        this.planets = planets;
    }

    calcGrav() {
        // the approximate gravitational constant
        var bigG = .00000000006;

        // loop through planet array
        for(let i = 0; i < this.planets.length; i++) {
            // loop through it again to compare two bodies
            for(let j = 0; j < this.planets.length; j++) {
                // no need to compare a planet to itself - skip this iteration
                if(i === j) continue;

                // grab two planets and their values
                let planet_1 = this.planets[i];
                let planet_2 = this.planets[j];

                // Pythagorean Theorem/Distance formula to determine distance between the two planets
                var distance = Math.sqrt(
                    (planet_1.x - planet_2.x) * (planet_1.x - planet_2.x) + (planet_1.y - planet_2.y) * (planet_1.y - planet_2.y)
                );
                // Calculate gravitational force exerted between the two bodies
                var gravity = bigG * (planet_1.mass * planet_2.mass) / distance / distance;

                var motion_x = (planet_2.x - planet_1.x) / distance;
                var motion_y = (planet_2.y - planet_1.y) / distance;

                planet_1.angle_x += motion_x * gravity / planet_1.mass;
                planet_1.angle_y += motion_y * gravity / planet_1.mass;

                planet_2.angle_x -= motion_x * gravity / planet_2.mass;
                planet_2.angle_y -= motion_y * gravity / planet_2.mass;
            }
        }
    }
}