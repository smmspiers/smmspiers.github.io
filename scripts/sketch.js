let p; 

function setup() {
	createCanvas(windowWidth, windowHeight);
	p = new Particle();
}
function draw() {
	p.draw();
	p.update(); 
}

class Particle {

	constructor() {
		this.pos = createVector(random(width), random(height));
		this.vel = createVector(random(-2, 2), random(-2, 2));
		this.size = 10;
	}

	update() {
		this.pos.add(this.vel);
	}

	draw() {
		noStroke();
		fill('#61B72C');
		circle(this.pos.x, this.pos.y, this.size);
	}
}