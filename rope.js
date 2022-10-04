class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
        var Anchor1X = point1.x;
		var Anchor1Y = point1.y;
		var Anchor2X = pont2.x + this.offsetX;
		var Anchor2Y = point2.y + this.offsetY;
		line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
		
	}

}