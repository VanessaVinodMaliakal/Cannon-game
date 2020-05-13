class Tanker {
  constructor(x,y,angle,height){
    var ground_options={
        isStatic:true
}
    this.tanker=Bodies.rectangle(x,y,100,height,ground_options);
   this.width =150;
   this.height=height;
   Matter.Body.setAngle(this.tanker,angle);
   fill("black");
   World.add(world,this.tanker);
}
display(){

var angle=this.tanker.angle
push();
translate(this.tanker.position.x,this.tanker.position.y);
rotate(angle);
rectMode(CENTER);
rect(0,0,this.width,this.height);
 pop();
}
}
