function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150,0,100);
  noStroke();
//  fill(200,200,200);
  let randomcolor = random(100,125);
  for(let x=0;x<20;x++)
    { for (let y=0;y<20;y++)
    { ellipse(x*20+10, y*20+10,20);
      if (mouseX>x*20&&mouseX<x*20+20)
      {if (mouseY>y*20&&mouseY<y*20+20)
      {push();
       fill(255);
       if(mouseIsPressed) {fill(0);}
       rect(x*20, y*20, 20);
       pop();
      }
      }
     if(mouseIsPressed) 
       {r=random(0,100);
        g=random(50,200);
        b=random(0,175);
        fill(r,g,b);}
    }
    }
  
}