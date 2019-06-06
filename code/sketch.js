let ground;
let x,y,z;
let button;
let num=0;
let grid_points=[];
let size=600;
let square_width=60;
let n=size/square_width;
let ground_height=40;
let i,j,k;
let mountain_height=300;
let sea_depth=-200
let xoff;
let yoff;


function setup(){

  createCanvas(800,800,WEBGL);
  let xoff=random(0,10);
  let yoff=random(10,100000);
  x=createSlider(0,360,0,1);
  y=createSlider(0,360,0,1);
  z=createSlider(0,360,0,1);
  button=createButton("Switch between rotate and no rotate mode");
  button.mousePressed(change)

 ground=new floors(0,0,0,ground_height,size);
  for(i=0;i<n;i++){
    grid_points[i]=[]
    for(j=0;j<n;j++){
      let b=map(noise(xoff,yoff),0,1,sea_depth,mountain_height);
      grid_points[i][j]=new points((floor(n/2)-i-1/2)*square_width,(floor(n/2)-j-1/2)*square_width,b);
      xoff+=0.06
    }
    yoff+=0.1
  }
}

function draw(){
  background(0);
  if(num==0){
    rotateX(radians(158+x.value()));
    rotateY(radians(y.value()));
    rotateZ(radians(z.value()));
  }
  else{
    rotateX(radians(158));
    rotateY(radians(45));
  }


 ground.show()
  // axes();
  for(i=0;i<n;i++){
    for(j=0;j<n;j++){
      grid_points[i][j].show();
    }
  }

  for(i=0;i<n-1;i++){
    for(j=0;j<n-1;j++){
      grid_points[i][j].join(grid_points[i][j+1],grid_points[i+1][j+1],grid_points[i+1][j]);
    }
  }
  for(i=0;i<n;i++){
    grid_points[0][i].down();
    grid_points[n-1][i].down();
  }
  for(i=0;i<n;i++){
    grid_points[i][0].down();
    grid_points[i][n-1].down();
  }
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
  strokeWeight(5)
  stroke(255,0,0);
  line(0,0,0,300,0,0);
  stroke(0,255,0);
  line(0,0,0,0,300,0);
  stroke(0,0,255);
  line(0,0,0,0,0,300);
  pop();
}
