class Throw{

    constructor(x,y,width,height){

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            length:10
        }

       this.pointB=pointB;
       this.throw=Constraint.create(options);
        World.add(world,this.throw);
    }

    fly(){

        this.throw.bodyA=nll;

    }

    Launch(bodyA){

        this.throw.bodyA=bodyA;

    }

    display(){
        
    }
}