class Flower{

constructor(){
  this.x = random(20, width -20);
  this.y = random(height/3, height -20);
  this.r = 0;
  this.petalCount = floor(random(3, 12))
  this.nectar = random(10, 50);
  this.growing = true;
  this.loc = createVector(this.x, this.y);
  this.pw = random(0.3, 1.3);
  this.ph = random(0.8, 1.5);
  this.centercol = [random(0, 155),random(0, 155),random(0, 155)];
  this.petalcol = [random(100, 255),random(100, 255),random(100, 255)];
}

show(){

  if(this.growing = true && this.r < this.nectar + 10){
    this.r += 0.1
  } else {
      this.r = this.nectar + 10;
      this.growing = false
  }


//petals
  noStroke();
  for(var i = 0; i < this.petalCount; i++){
    push();
    ellipseMode(CENTER);
    translate(this.x, this.y);
    rotate((TWO_PI/this.petalCount) * i);
    fill(this.petalcol);
    ellipse(this.r / 2, 0, this.r/this.pw, this.r/this.ph);
    pop();
  }

//center of the flower
  push();
  noStroke();
  ellipseMode(CENTER);
  translate(this.x, this.y);
  fill(this.centercol);
  ellipse(0, 0, this.r);
  pop();

//this.nectar-= 0.0032;

//reset flower when nectar reaches 0
for(let i = 0; i < flowers.length; i++){
  if(flowers[i].nectar < 0){
    //flowers.push(new Flower());
    flowers.splice(i,1);
  }
}



}

}
