class ball
{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,friction:0.4,density:1			
			}
		this.x=x;
		this.y=y;
        this.r=r;
		this.body=Bodies.circle(x, y,r, options);
        this.img=loadImage("paper.png");
 		World.add(world, this.body);
         

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.img,0,0,this.r,this.r);
			pop()
			
	}

}