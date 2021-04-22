class Hand{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
       
        this.pointB = pointB
        this.hand = Constraint.create(options);
        World.add(world, this.hand);
    }

    fly(){
        this.hand.bodyA = null;
    }
    attach(body){
        this.hand.bodyA = body;
    }

    display(){
       
        if(this.hand.bodyA){
            var pointA = this.hand.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
            pop();
        }
    }
    
}