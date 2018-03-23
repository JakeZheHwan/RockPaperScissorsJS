var userscore = 0;
var aiscore = 0;

function calculate(id) {

var id;
var result;
var aioption;

//generate number between 1-3 where each number represent a hand sign
var output = Math.floor(Math.random() * 3) + 1 ;

if (output == 1){
     aioption = "rock";
     document.getElementById("aioutput").innerHTML = "Rock";
     // document.getElementById("aioutput").innerHTML = '<img src="image/rock.png" id="rock">';
}

else if(output == 2){
    aioption = "paper";
    document.getElementById("aioutput").innerHTML = "Paper";
    // document.getElementById("aioutput").innerHTML = '<img src="image/paper.png" id="paper">';
}

else if (output == 3) {
    aioption = "scissors";
    document.getElementById("aioutput").innerHTML = "Scissors";
    // document.getElementById("aioutput").innerHTML = '<img src="image/scissors.png" id="scissors">';
}


//Compare function
if (id == "rock") {
	if (aioption == "paper") {
		aiscore += 1;
		document.getElementById("aiscore").innerHTML = aiscore;
		document.getElementById("resultstatement").innerHTML = "You Lose";
	}

	else if (aioption == "scissors") {
		userscore += 1;
		document.getElementById("userscore").innerHTML = userscore;
		document.getElementById("resultstatement").innerHTML = "You Win";
	}

	else 
		document.getElementById("resultstatement").innerHTML = "Draw";
}

else if (id == "paper") {
	if (aioption == "rock") {
		userscore += 1;
		document.getElementById("userscore").innerHTML = userscore;
		document.getElementById("resultstatement").innerHTML = "You Win";
	}

	else if (aioption == "scissors") {
		aiscore += 1;
		document.getElementById("aiscore").innerHTML = aiscore;
		document.getElementById("resultstatement").innerHTML = "You Lose";
	}

	else 
		document.getElementById("resultstatement").innerHTML = "Draw";
}

else if (id == "scissors") {
	if (aioption == "rock") {
		aiscore += 1;
		document.getElementById("aiscore").innerHTML = aiscore;
		document.getElementById("resultstatement").innerHTML = "You Lose";
	}

	else if (aioption == "paper") {
		userscore += 1;
		document.getElementById("userscore").innerHTML = userscore;
		document.getElementById("resultstatement").innerHTML = "You Win";
	}

	else 
		document.getElementById("resultstatement").innerHTML = "Draw";
}

}
