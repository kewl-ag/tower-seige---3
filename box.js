class Box  {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restituiton : 0.4,
        friction : 2
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display(){
    var pos =this.body.position;
    var angle = this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("blue");
    rect(0,0, this.width, this.height);
    pop();


    if(this.body.speed < 2){

      
      
      }
      
      else{
      push()
        this.visiblity = this.visiblity - 5;
        tint(255,this.visiblity);
      //image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
      World.remove(world,this.body);
      
      }
      
      }

  }


  function score(){

    if(this.visibility<0 && this.visibility >- 105){
    
      score ++;
    
    }
    
    }