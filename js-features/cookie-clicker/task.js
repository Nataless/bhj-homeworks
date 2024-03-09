const cookie = document.getElementById("cookie");
const clickCounter = document.getElementById("clicker__counter");
cookie.onclick = function() {
	if (clickCounter.textContent % 2 == 0) {
		cookie.width = 250;
	} else {
		cookie.width = 200;
	}
	clickCounter.textContent++;
};