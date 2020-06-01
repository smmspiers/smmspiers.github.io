let particles = []; 

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	const nParticles = Math.floor(window.innerHeight / 20);
	for (let i = 0; i < nParticles; i++) {
		particles.push(new Particle());
	}
	strokeWeight(0.2);
}

function draw() {
	background('#FFFFFF');
	particles.forEach(p => {
		p.update();
		p.draw();
		p.connect(particles);
	});
}

class Particle {

	constructor() {
		this.pos = createVector(random(width), random(height));
		this.vel = createVector(random(-2, 2), random(-2, 2));
		this.size = 5;
	}

	update() {
		this.pos.add(this.vel);
		this.edges();
	}

	draw() {
		noStroke();
		fill('#61B72C');
		circle(this.pos.x, this.pos.y, this.size);
	}

	edges() {
		if (this.pos.x < 0 || this.pos.x > width) {
			this.vel.x *= -1
		}

		if (this.pos.y < 0 || this.pos.y > height) {
			this.vel.y *= -1
		}
	}

	connect(particles) {
		particles.forEach(p => {
			const d = dist(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
			if (d < 125) {
				stroke('#61B72C');
				line(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
			}
		});
	}
}