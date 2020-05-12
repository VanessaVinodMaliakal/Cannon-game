class Ground {
    constructor(x,y,width,height){
        var ground_options={
            isStatic:true
    }
        this.ground=Bodies.rectangle(x,y,600,20,ground_options);
       this.width =width;
       this.height=height;
      fill("black");
       World.add(world,this.ground);
    }
    display(){
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
    }
};