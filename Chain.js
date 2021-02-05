class Chain {
    constructor(a, b) {
        var options = { bodyA: a, pointB: b, stiffness: 0.1, length: 10 }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.i1 = loadImage("sprites/sling1.png");
        this.i2 = loadImage("sprites/sling2.png");
        this.i3 = loadImage("sprites/sling3.png");
    }

    display() {
        if (this.chain.bodyA) {
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            strokeWeight(10);
            stroke(48, 22, 8);
            if (this.chain.bodyA.position.x < 220) {
                line(pointA.x - 20, pointA.y, pointB.x + 20, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x - 20, pointB.y);
                image(this.i3, pointA.x - 30, pointA.y - 10, 15, 30);
            }
            else 
            {
                line(pointA.x + 20, pointA.y, pointB.x + 20, pointB.y);
                line(pointA.x + 20, pointA.y, pointB.x - 20, pointB.y);
                image(this.i3, pointA.x + 15, pointA.y - 10, 15, 30);
            }
        }
        image(this.i1, 200, 20);
        image(this.i2, 170, 20);
    }
    fly() {
        this.chain.bodyA = null;
    }
}