class Iron{
    constructor(x,y,w,h){
        var options = {
            restitution:0.8,
            friction:3,
            density:30

        }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.width = 50;
    this.height = 70;
    World.add(world,this.body);

    }

    display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("grey")
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    }
}