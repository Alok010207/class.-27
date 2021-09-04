class SS{
    constructor(a,b){
        var option={
           bodyA:a,
           bodyB:b,
           stiffness:0.04,
           length:10
        }
        this.chain = Constraint.create(option);
        World.add(world,this.chain);

    }
    display(){
        var posA = this.chain.bodyA.position
        var posB = this.chain.bodyB.position
        
        push();
        strokeWeight(4);
        line(posA.x,posA.y,posB.x,posB.y);
        //rect(this.chain.position.x,this.chain.position.y,this.w,this.h);
        pop();
    }
}