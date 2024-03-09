const getHole = (index) => document.getElementById(`hole${index}`),
	deadShot = document.getElementById("dead"),
	lostShot = document.getElementById("lost");
let dead = parseInt(deadShot.textContent),
	lost = parseInt(lostShot.textContent);

for (let i = 1; i <= 9; i++) {
	getHole(i).onclick = function() {
		if (getHole(i).classList.contains("hole_has-mole")) {
			dead += 1;
		} else {
			lost += 1;
		}

		if (dead === 10) {
			alert("Вы победили!");
			dead = 0;
			lost = 0;
		}

		if (lost === 5) {
			alert("Вы проиграли!");
			dead = 0;
			lost = 0;
		}

		deadShot.textContent = dead;
		lostShot.textContent = lost;
	};
}