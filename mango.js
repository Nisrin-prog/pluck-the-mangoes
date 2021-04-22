class Mango {
    constructor(x,y) {
        var options = {
            isStatic: true,
            'restitution': 0,
            'friction':1.0,
            'density':0.4
        }
        
        this.body = Bodies.circle(x,y,27,options);
        this.r = 27

        this.image = loadImage("sprites/mango.png")
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        ellipseMode(CENTER);
        fill ("white")
        image(this.image,0,0,27, 27);
        pop ()
    }       
};
