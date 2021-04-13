class Pins{

    constructor(x,y,width,height){

        var options = {

            isStatic: true,
            restitution:0.8,
            friction:1.0,
            density:0.5
        }


        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("images/bowling-pin.png")
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;

      
      imageMode(CENTER)
      image(this.image,pos.x, pos.y, this.width, this.height);
      fill("red")
      

    }
}