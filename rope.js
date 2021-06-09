class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA, pointB:pointB, length:350, stiffness:0.08
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y)
    }
}