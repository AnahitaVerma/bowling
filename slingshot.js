class Slingshot{

    constructor(bodyA,pointB){
var options = {
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.1,
    length: 3
}
this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
        Matter.body.setVelocity(this.body,-5)
    }
    attach(A){

        this.sling.bodyA = A
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke(133,196,21)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}