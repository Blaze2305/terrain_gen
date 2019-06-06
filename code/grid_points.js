class points{
  constructor(x,y,height){
      this.x=x;
      this.y=y;
      this.height=height+ground_height/2;
  }

  show(){
    push();
    stroke(255);
    strokeWeight(4);
    point(this.x,this.height,this.y);
    pop();
  }

  join(a,c,d){
    push();
    let g=0;
    let b=0;
    let avg1,avg2;
    noStroke()

    // for points this,a,c

    if(this.height>0 && a.height>0 && c.height>0){
      avg1=(this.height+a.height+c.height)/3;
      g=map(avg1,0,mountain_height,110,255);
    }
    else{
      b=map(this.height,sea_depth,0,0,255);
    }

    fill(0,g,b)
    beginShape();
    vertex(this.x,this.height,this.y);
    vertex(a.x,a.height,a.y);
    vertex(c.x,c.height,c.y);
    endShape();

    // for points this,c,d

    if(this.height>0 && c.height>0 && d.height>0){
      avg2=(this.height+d.height+c.height)/3;
      g=map(avg2,0,mountain_height,110,255);
    }
    else{
      b=map(this.height,sea_depth,0,0,255);
    }
      fill(0,g,b)
    beginShape();
    vertex(this.x,this.height,this.y);
    vertex(d.x,d.height,d.y);
    vertex(c.x,c.height,c.y);
    endShape();
    pop();
  }

  level(base){
    this.height=base;
  }

  down(){
    push();
    stroke(255);
    if(this.height>ground_height){
      line(this.x,this.height,this.y,this.x,ground_height/2,this.y);
    }
    pop();
  }
}
