const numDots = 100
const colours = ["#ff3434", "#ffe23c", "#5fd8ff"]
let dots = []
let clusters = []

function setup() {
	initDots()
	initClusters()
	createCanvas(windowWidth, windowHeight)
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function draw() {
	for (dot of dots) {
		drawDot(dot.x, dot.y, dot.colour)
	}
}

function drawDot(x, y, colour) {
	noStroke()
	fill(color(colour))
	circle(x, y, 25)
}

function animateDotsToCluster() {
	trans
}

function initClusters() {
	for (let i = 0; i < colours.length; i++) {
		clusters.push({
			x: randomNumber(windowWidth), 
			y: randomNumber(windowHeight)
		});
	}
}

function initDots() {
	for (let i = 0; i < numDots; i++) {
		dots.push({
			x: randomNumber(windowWidth), 
			y: randomNumber(windowHeight),
			colour: randomColour()
		});
	}
}

function randomNumber(maxValue) {
	return Math.floor(Math.random() * maxValue)
}

function randomColour() {
	return colours[Math.floor(Math.random() * colours.length)]
}