class Ball{
    constructor(x,y){
        var ball_options={
         // isStatic:true ,
            restitution:1,
             gravity:2,
   }
        this.ball=Bodies.circle(x,y,50,ball_options);
       this.radius=50;
       //this.height=height;
      fill("black");
       World.add(world,this.ball);
    }
    display(){
        if(this.ball.y>300){
           restitution=restitution*2;
            console.log(this.ball.y);
        }
       ellipseMode(CENTER);
        ellipse(this.ball.position.x,this.ball.position.y,this.radius,this.radius);
    }
};