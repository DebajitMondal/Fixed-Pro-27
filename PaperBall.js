class Ball{
    constructor(x,y){
        var options = {
           isStatic:false,
            restitution: 1.0,
            friction:1.2,
            density:1.2
          
        }
        this.body = Bodies.circle(x,y,20,options)
        World.add(world,this.body)
        
        
    }

    display() {
        var pos = this.body.position
        ellipseMode(RADIUS)
        fill("DeepPink")
        ellipse(pos.x,pos.y,20,20)
    }

}

