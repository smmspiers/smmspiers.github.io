const numDots = 600
const colours = ["rgb(255, 52, 52)", "rgb(255, 225, 60)", "rgb(95, 216, 255)"]

function randomNumber(maxValue) {
	return Math.floor(Math.random() * maxValue)
}

function randomMovement() {
	return anime.random(0, 1000)
}

function randomColour() {
	return colours[Math.floor(Math.random() * colours.length)]
}

function getPosition(element) {
	const rect = element.getBoundingClientRect()
	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
	scrollTop = window.pageYOffset || document.documentElement.scrollTop
	// console.log(getTranslation(element, 0))
	// translateX = 0
	// translateY = 0
	// transform = element.style.transform.split(" ")
	// if (transform[0] != "") {
	// 	if (element.style.transform.split(" ")[0].match(/\d+/) != null) {
	// 		translateX = parseInt(element.style.transform.split(" ")[0].match(/\d+/)[0])
	// 		// console.log(parseInt(element.style.transform.split(" ")[0].match(/\d+/)[0]))
	// 	}
	// 	if (element.style.transform.split(" ")[1].match(/\d+/) != null) {
	// 		translateX = parseInt(element.style.transform.split(" ")[1].match(/\d+/)[0])
	// 	}
	// }
	// // console.log(element.style.transform.split(" ")[0].match(/\d+/)[0])
	// if (translateX != 0) {
	// 	return {
	// 		top: parseInt(element.style.top.match(/\d+/)[0]) + translateX,
	// 		left: parseInt(element.style.left.match(/\d+/)[0]) + translateY
	// 	}
	// }
	// console.log({
	// 	e: element,
	// 	top: rect.top + scrollTop + translateX,
	// 	left: rect.left + scrollLeft + translateY
	// })
	return {
		top: rect.top + scrollTop,
		left: rect.left + scrollLeft
	}
}

function createDots() {
	for (let i = 0; i < numDots; i++) {
		let dot = document.createElement("span")
		dot.setAttribute("id", "dot" + i)
		dot.style.left = randomNumber(1200) + "px"
		dot.style.top = randomNumber(700) + "px"
		window.animationArea.appendChild(dot)
	}
}

function createClusters() {
	let clusterClass = 0
	for (let i = 0; i < numDots; i++) {
		if (i % (numDots / colours.length) == 0 && i != 0) {
			clusterClass++
		}
		const dot = document.getElementById("dot" + i)
		dot.setAttribute("class", "dot cluster" + clusterClass)
		dot.style.backgroundColor = colours[clusterClass]
		dot.style.left = randomNumber(window.innerWidth) + "px"
		dot.style.top = randomNumber(window.innerHeight) + "px"
		window.animationArea.appendChild(dot)
	}
}

function animateRandomDot(dotID, colour) {
	const dot = document.getElementById("dot" + dotID)
	anime({
		targets: dot,
		translateX: function() {
			return anime.random(0, window.innerWidth - getPosition(dot).left);
		},
		translateY: function() {
			return anime.random(0, window.innerHeight - getPosition(dot).top);
		},
		easing: 'easeInOutExpo',
		duration: 5000,
		backgroundColor: colour,
		complete: function() {
			if (dotID + 1 == numDots) {
				iterations++
				createNewClustersClasses()
			}
		}
	});
}

function animateRandomDots() {
	let clusterClass = 0
	for (let i = 0; i < numDots; i++) {
		if (i % colours.length == 0 && i != 0) {
			clusterClass++
		}
		animateRandomDot(i, colours[clusterClass])
	}
}

function animateDotToCluster(dot, clusterPosition) {
	const position = getPosition(dot)
	anime({
		targets: dot,
		translateX: [position.left, clusterPosition.left - position.left + Math.round(Math.random() * 300)],
		translateY: [position.top, clusterPosition.top - position.top + Math.round(Math.random() * 300)],
		easing: 'easeInOutExpo',
		duration: 10000
		// complete: function() {
		// 	if (parseInt(dot.id.replace("dot", "")) + 1 == numDots) {
		// 		animateRandomDots()
		// 	}
		// }
	});
}

function animateDotsToCluster() {
	const clusterDots1 = document.getElementsByClassName("cluster0")
	for (dot of clusterDots1) {
		animateDotToCluster(dot, window.clusterPosition1)
	}
	const clusterDots2 = document.getElementsByClassName("cluster1")
	for (dot of clusterDots2) {
		animateDotToCluster(dot, window.clusterPosition2)
	}
	const clusterDots3 = document.getElementsByClassName("cluster2")
	for (dot of clusterDots3) {
		animateDotToCluster(dot, window.clusterPosition3)
	}
}

function animateClustering() {
	animateDotsToCluster()
}

function createNewClustersClasses() {
	const dots = document.getElementsByClassName("dot");
	for (dot of dots) {
		for (colour of colours) {
			if (colour == dot.style.backgroundColor) {
				dot.setAttribute("class", "dot cluster" + colours.indexOf(colour))
			}
		}
	}
}

window.onload = function() {
	window.animationArea = document.getElementById("animation-area")
	cp1 = {left: randomNumber(window.innerWidth), top: randomNumber(window.innerHeight)}
	cp2 = {left: randomNumber(window.innerWidth), top: randomNumber(window.innerHeight)}
	cp3 = {left: randomNumber(window.innerWidth), top: randomNumber(window.innerHeight)}
	window.clusterPosition1 = cp1
	window.clusterPosition2 = cp2
	window.clusterPosition3 = cp3

	createDots()
	createClusters()
	animateDotsToCluster()
	// animateClustering()
}
