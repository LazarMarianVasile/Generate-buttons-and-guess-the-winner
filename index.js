function randomWinner() {
	var numberOfButtons = document.getElementById("myNumber").value;
	let randomNumber = Math.floor(Math.random() * numberOfButtons);
	for(let i = 0; i < numberOfButtons; ++i) {
			let btn = document.createElement("button");
			btn.innerHTML = "Button " + i;
			btn.id = i;
			btn.onclick = function () {
  				if (randomNumber == this.id) {
					document.getElementById("text").innerHTML = "You win!";
				} else {
					document.getElementById("text").innerHTML = "Try again!<br/>The winner is Button " + randomNumber ;
				}
			};
			document.body.appendChild(btn);
	}
}