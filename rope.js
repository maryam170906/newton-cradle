class Rope{
    constructor(bodyA,pointB){  
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          'stiffness':1,
          'angularStiffness':1,
          'length':220
      }
     // this.rope = Constraint.create(options);
      this.rope = Constraint.create(options);
      this.pointX = bodyA.x;
      this.pointY = bodyA.y;
      this.pointB = pointB;
      World.add(world,this.rope);
    }
    display(){
      if (this.sling.bodyA) {
       var pointA = this.chain.bodyA.position;
       var pointB = this.pointB;
       push()
       strokeWeight(3.5)
       stroke("#fff")
       line(pointB.x,pointB.y,pointA.x,pointA.y);
       pop()
      }
    }                                    
} 