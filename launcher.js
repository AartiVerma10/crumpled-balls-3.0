class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 20
        }
     this.launcher=Constraint.create(options); 
 
     World.add(world,this.launcher); 

    }
    throw(){
        this.launcher.bodyA=null;
    }
    display(){
 
        if(this.launcher.bodyA){
            this.bodyA=this.launcher.bodyA.position;
            this.pointB=this.launcher.pointB;
            strokeWeight(4);
            line(this.bodyA.x,this.bodyA.y,this.pointB.x,this.pointB.y);

        }
    }
}