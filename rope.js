class Rope{

    constructor(A,ptB){
        var options = {
            bodyA:A,
            pointB:ptB,
            length: 20,
            stiffness: 0.05
        }
//this.sling1 = loadImage("sprites/sling1.png");
//this.sling2 = loadImage("sprites/sling2.png")
//this.sling3 = loadImage("sprites/sling3.png");

        

        
        this.pointB = ptB
        this.shot = Matter.Constraint.create(options)
        World.add(world, this.shot);
        
    }

display(){


if(this.shot.bodyA){


    var posA = this.shot.bodyA.position;
    var posB = this.pointB
    
    strokeWeight(4);
    stroke("red");
  
   
    
        line(posA.x,posA.y,posB.x,posB.y);
 
}
}
   
    fly(){

        this.shot.bodyA = null;
    }

    
        attach(body){

       this.shot.bodyA = body

        }
    
}
    
      
