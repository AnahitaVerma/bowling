class ball{

    constructor(x,y){

        var options = {

            isStatic: false,
            restitution: 0.1,
            friction: 0.5,
            density: 0.5
        }
        this.body = Bodies.circle(x,y,30,options)
        //this.image = loadImage("images/bowling-ball.png")
        this.x = x
        this.y = y
        this.radiuus = 30
        //this.scale= 1
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        rectMode(CENTER)
       // imageMode(RADIUS)
       // image(this.image, pos.x, pos.y, this.radius, this.radius)
      

        push()
        translate(pos.x, pos.y)
        fill("yellow")
        ellipse(0, 0, this.radius);
        pop()
    }
}