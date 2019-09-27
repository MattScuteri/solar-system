class Gravity {
    constructor(firstMass, secondMass, distance) {
        this.firstMass = firstMass;
        this.secondMass = secondMass;
        this.distance = distance;
    }

    getGravForce() {
        const bigG = 0.00000000006673;
        
        let gravForce = (bigG * this.firstMass * this.secondMass) / this.distance ** 2;
        console.log(gravForce);
        return gravForce;
    }
}