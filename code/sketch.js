let ground;
let x,y,z;
let button;
let num=0;


function setup(){

  createCanvas(800,800,WEBGL);
  x=createSlider(0,360,0,1);
  y=createSlider(0,360,0,1);
  z=createSlider(0,360,0,1);
  button=createButton("Switch between rotate and no rotate mode");
  button.mousePressed(change)
  ground=new floor(0,0,0,40,600);
}

function draw(){
  background(0);
  if(num==1){
    rotateX(radians(158+x.value()));
    rotateY(radians(y.value()));
    rotateZ(radians(z.value()));
  }
  else{
    rotateX(radians(158));
    rotateY(radians(45));
  }
  ground.show()
  axes();
}

function change(){
  if(num==0){
    num=1;
  }
  else{
    num=0;
  }
}

function axes(){
  push();
  stroke(255,0,0);
  line(0,0,0,100,0,0);
  stroke(0,255,0);
  line(0,0,0,0,100,0);
  stroke(0,0,255);
  line(0,0,0,0,0,100);
  pop();
}

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

class points{
  constructor(x,y,height){
      this.x=x;
      this.y=y;
      this.height=height;
  }

  show(){
    push();
    stroke(255);
    strokeWeight(4);
    point(this.x,this.height,this.y);
    pop();
  }
}
