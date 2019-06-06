class floor{

  constructor(x,y,z,height,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.height=height;
    this.size=size;
  }

  show(){
    push();
    stroke(255);
    noFill();
    translate(this.x,this.y,this.z);
    box(this.size,this.height,this.size);
    pop();
  }

}
