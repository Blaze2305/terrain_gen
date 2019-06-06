let ground;
let x,y,z;
let button;
let num=0;
let grid_points=[];
let size=600;
let square_width=30;
let n=size/square_width;
let ground_height=40;
let i,j,k;

function setup(){

  createCanvas(800,800,WEBGL);
  x=createSlider(0,360,0,1);
  y=createSlider(0,360,0,1);
  z=createSlider(0,360,0,1);
  button=createButton("Switch between rotate and no rotate mode");
  button.mousePressed(change)
  ground=new floor(0,0,0,ground_height,size);
  for(i=0;i<n;i++){
    grid_points[i]=new points()
  }
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
