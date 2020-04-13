function randomPosition(maxValue) {
	return Math.floor(Math.random() * maxValue)
}

function randomMovement() {
	return anime.random(0, 1000)
}

function randomColour() {
	const colours = ["#FF3434", "#FFE13C", "#5FD8FF"]
	return colours[Math.floor(Math.random() * colours.length)]
}

function createCluster(name, colour) {
	const animationArea = document.getElementById("animation-area")
	for (let i = 0; i < 10; i++) {
		let circle = document.createElement("span")
		circle.setAttribute("class", name + " circle")
		circle.style.backgroundColor = colour
		circle.style.left = randomPosition(90) + "vw"
		circle.style.top = randomPosition(50) + "vw"
		animationArea.appendChild(circle)
	}
}

function createClusters() {
	const colours = ["#FF3434", "#FFE13C", "#5FD8FF"]
	for (let i = 0; i < 4; i++) {
		createCluster("cluser" + i, colours[i])
	}
}

function animateCluster(clusterName) {
	const circles = document.getElementsByClassName("circle");
	anime({
			targets: circles,
			translateX: function() {
				return anime.random(0, 200);
			},
			translateY: function() {
				return anime.random(0, 300);
			},
			// delay: anime.stagger(50),
			elasticity: 400,
			easing: 'easeInOutElastic',
			duration: 1200,
			complete: animate
		});
}

window.onload = function() {
	createClusters()
}