class Hive{
  constructor(){
    this.x = width/2
    this.y = 20
    this.honey = 1;
    this.loc = createVector(this.x, this.y);
    this.rad = 10;
    this.cellsLoc =[];
    this.cellCount = 0;
    this.cols = 0;
    this.rows = 0;
    this.depth = 0;

    this.wSpace = sqrt(3) * this.rad;
    this.hSpace = this.rad * 1.5;

    this.storage = 5
    this.broodfact = this.storage * 0.75
    this.cost = 2/3600

    this.brood = 0
    this.spawnTime = 1;

  }

  show(){

    if(this.honey <= 0){
      this.honey = 1;
    }

    push();
    fill(40, 20, 0);
    noStroke();
    translate (this.x - (floor(this.cols/2) * (this.wSpace)), this.y);
    rectMode(CORNERS);
    rect((-(this.cols) * this.wSpace)/ this.cols, -this.hSpace*2, ((this.cols+0.5) * this.wSpace), (this.rows + 0.5) * this.hSpace, 10)
    pop();

   this.cellCount = ceil(this.honey/this.storage);
   this.cols = ceil(sqrt(this.cellCount));
   this.rows = ceil(this.cellCount/this.cols);


   this.depth = -(this.cols + this.rows);

   this.cellsLoc.splice(0, this.cellsLoc.length);
   this.brood = (1 + floor(this.cellCount/this.broodfact));

   for (let i = 0; i < this.rows; i++){
       for(let j = 0; j < this.cols; j++){
        this.cellsLoc.push(createVector(j * this.wSpace + ((i%2) * this.wSpace/2), i * this.hSpace));
       }
   }



   for (let i = 0; i < this.cellCount; i++){
     this.cellRender(this.cellsLoc[i].x, this.cellsLoc[i].y);
   }
   for (let j = 0; j < this.brood; j++){
     this.broodRender(this.cellsLoc[j].x, this.cellsLoc[j].y);
   }

      this.honey -= (this.cost * workers.length);
      this.spawnTime -= 1;

      if(this.spawnTime < 0){
        for(let i = 0; i < ceil(this.brood/6); i++){
        workers.push(new Worker (this.x, this.y))
      }
        this.spawnTime = 3600;

      }
}

    cellRender(x, y, i){
    push();
    translate (this.x - (floor(this.cols/2) * this.wSpace), this.y);
    fill(255, map(y, 0, height/3, 225, 255), map(y, 0, height/3, 100, 255));
    stroke(0);
    strokeWeight(2);
    let angle = TWO_PI / 6;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + sin(a) * this.rad;
      let sy = y + cos(a) * this.rad;
      vertex(sx, sy);
    }
    endShape(CLOSE);
    textSize(12);
    strokeWeight(0);
    fill(0);
    pop();
    }

    broodRender(x, y){
    push();
    translate (this.x - (floor(this.cols/2) * this.wSpace), this.y);
    fill(180, 120, 0);
    stroke(0);
    strokeWeight(2);
    let angle = TWO_PI / 6;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + sin(a) * this.rad;
      let sy = y + cos(a) * this.rad;
      vertex(sx, sy);
    }
    endShape(CLOSE);
    strokeWeight(0);
    fill(85, 60, 0)
    ellipse(x,y,this.rad)
    pop();
    }
  }
