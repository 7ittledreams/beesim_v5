let workers = [];
let flowers = [];
let cells = [];
let beeCount = 0;
let flowerCount = 10;
let flowerTime = 300;
let flowerTimeLow = 900;
let flowerTimeHigh = 2700;
let hudOn = true;

function setup() {
	createCanvas(1200, 900);
	//noCursor();
	hive = new Hive();

for(let i = 0; i < beeCount; i++){
	workers [i] = new Worker(hive.x, hive.y);
}

for (let i = 0; i < flowerCount; i++){
	flowers [i] = new Flower(random(20, width -20), random(20, height -20), 0);
}

	graph = new Graph();

	setInterval(record, 20000);

}

function draw() {
	background(165, 208, 255);
	stroke(0);
	fill(255,20, 200);

	hive.show();

	// textSize(18);
	// fill(255, 100);
	// noStroke();
	// //textAlign(CENTER, CENTER);
	// text("Honey: " + floor(hive.honey), 20, 20);
	// text("Workers: " + workers.length, 20, 40);
	// text("Flowers: " + flowers.length, 20, 60);
	// text("Hive Size: " + floor(hive.cellCount), 20, 80);
	// text("Brood: " + floor(hive.brood), 20, 100);
	// text("Spawn/m: " + ceil(hive.brood/6), 20, 120);

	for(let i = 0; i < workers.length; i++){
		if(workers[i].dead == true){
		workers.splice(i, 1);

	}
	}

	for (let i = 0; i < flowers.length; i++){
	flowers[i].show();
	}

	for (let i = 0; i < workers.length; i++){
	workers[i].move();
	workers[i].show();
	}

// for (let i = 0; i < cells.length; i++){
// 	cells[i].show();
// 	cells[i].move();
// }

	flowerTime --;

	if(flowerTime <= 0){
		flowers.push(new Flower());
		flowerTime = (random(flowerTimeLow, flowerTimeHigh));

	}

	if(hudOn == true){
	graph.show();
}

}

function keyPressed(){
	if(key == ' '){
		flowerTime = 1;
	}
	if(keyCode == UP_ARROW){
		hive.honey += hive.storage;
	}
	if(keyCode == DOWN_ARROW){
		hive.honey -= hive.storage;
	}

}

function keyTyped(){
	if(key == 'b'){
		hudOn = !hudOn;
	}
}

function record(){
	graph.honey.push(hive.honey);
	graph.workers.push(workers.length);
	graph.flowers.push(flowers.length);
}
