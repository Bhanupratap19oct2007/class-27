class Slingshot {
    constructor(body1, body2) {
        var option = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.04,
            length: 15
        }
        this.sling = Constraint.create(option);
        World.add(world, this.sling);
    }
    display() {
        var start = this.sling.bodyA.position;
        var end = this.sling.bodyB.position;
        line(start.x, start.y, end.x, end.y);
        
    }
};