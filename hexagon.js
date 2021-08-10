class Hexagon{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('hex.png');
       // this.pointB = pointB
      //  this.hexagon = Constraint.create(options);
       // World.add(world, this);
    }
attach(body)
{
    this.hexagon.bodyA=body;

}
    fly(){
        this.hexagon.bodyA = null;
    }

    display(){
        image(this.sling1,200,400,50,50);
        
       
    }
    
}
