class Smooth {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/wood2.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(0);
      imageMode(CENTER);
      //image(this.image,pos.x, pos.y, this.width, this.height);
      image(this.image,100, 100, 400, 20);
      pop();
    }
  };
