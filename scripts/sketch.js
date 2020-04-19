function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	noStroke()
	fill(color(255, 204, 0)) 
	const c = circle(500, 500, 50)
	noStroke()
	fill(color('magenta')) 
	const c2 = circle(400, 500, 50)
}

function drawRandomCircle() {
	noStroke()
	fill(color(255, 204, 0)) 
	const c = circle(500, 500, 50)
}