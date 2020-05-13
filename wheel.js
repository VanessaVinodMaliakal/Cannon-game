class Wheel{
    constructor(x,y){
        var wheel_options={
            isStatic:true
    }
        this.wheel=Bodies.circle(x,y,50,wheel_options);
       this.radius=60;
       //this.height=height;
      fill("black");
       World.add(world,this.wheel);
    }
    display(){
       ellipseMode(CENTER);
        ellipse(this.wheel.position.x,this.wheel.position.y,this.radius,this.radius);
    }
};