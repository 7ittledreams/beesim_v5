class Cell {
  constructor(x, y, radius, npoints){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.npoints = npoints

  }

  show(){
    fill(255, 255, 0, 100);
    let angle = TWO_PI / this.npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = this.x + sin(a) * this.radius;
      let sy = this.y + cos(a) * this.radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  move(){
    for (let i = 0; i < cells.length; i++){
    if (this.intersects(cells[i])){
      // this.x += this.radius;

    }
  }
}
  intersects(other){
  let d = dist(this.x, this.y, other.x, other.y);
  return (d < this.radius);
  }
}
