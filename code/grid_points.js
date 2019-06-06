class points{
  constructor(x,y,height){
      this.x=x;
      this.y=y;
      this.height=height+ground_height;
  }

  show(){
    push();
    stroke(255);
    strokeWeight(4);
    point(this.x,this.height,this.y);
    pop();
  }
}
