var playerChoice = "";
var computerChoice = "";
var compScore=0;
var playScore=0;
var game;
var result;

var rules = function () {
	$("#selector").remove();
	$("#header").append("<img src='images/RPSLS-rock.png'>");
	$("#header").append("<img src='images/RPSLS-paper.png'>");
	$("#header").append("<img src='images/RPSLS-scissors.png'>");
	$("#rules").append($("<p class='rules'>").text("Scisssor cut Paper"));
	$("#rules").append($("<p class='rules'>").text("Paper covers Rock"));
	$("#rules").append($("<p class='rules'>").text("Rock crushes Scissors"));
	if (game == 2) {
	$("#header").append("<img src='images/RPSLS-lizard.png'>");
	$("#header").append("<img src='images/RPSLS-spock.png'>");
	$("#rules").append($("<p class='rules'>").text("Rock crushes Lizard"));
	$("#rules").append($("<p class='rules'>").text("Lizard poisons Spock"));
	$("#rules").append($("<p class='rules'>").text("Spock smashes Scissors"));
	$("#rules").append($("<p class='rules'>").text("Scissor decapitates Lizard"));
	$("#rules").append($("<p class='rules'>").text("Lizard eats Paper"));
	$("#rules").append($("<p class='rules'>").text("Paper disproves Spock"));
	$("#rules").append($("<p class='rules'>").text("Spock vaporizes Rock"));
}
  chooseRPSSL();
}

var chooseRPSSL = function () {
	$("#game").append($("<p>").text("Make your choice"));
	$("#game").append("<img id='rock' src='images/rock.png'>");
	$("#game").append("<img id='paper' src='images/paper.png'>");
	$("#game").append("<img id='scissors' src='images/scissors.png'>");
	if (game == 2) {
	$("#game").append("<img id='lizard' src='images/lizard.png'>");
	$("#game").append("<img id='spock' src='images/spock.png'>");
	};
	makeSelection();
}

var computerSelect = function(){
// randomly determine computer choice
if (game == 1) {
	n=3
}
if (game == 2) {
	n=5
}
var computer = Math.floor(Math.random() * n) + 1;

if (computer == 1) {
	computerChoice = "Rock";
};
if (computer == 2) {
	computerChoice = "Paper";
};
if (computer == 3) {
	computerChoice = "Scissors";
};
if (computer == 4) {
	computerChoice = "Spock";
};
if (computer == 5) {
	computerChoice = "Lizard";
};
// console.log("Player Choice " + playerChoice);
// console.log("computer choice " + computerChoice);
// console.log("game " + game);

winorlose();
}

var makeSelection = function () {
$("#rock").click(function() {
	playerChoice = "Rock";
	computerSelect();
});

$("#paper").click(function() {
	playerChoice = "Paper";
	computerSelect();
});

$("#scissors").click(function() {
	playerChoice = "Scissors";
	computerSelect();
});

$("#spock").click(function() {
	playerChoice = "Spock";
	computerSelect();
});

$("#lizard").click(function() {
	playerChoice = "Lizard";
	computerSelect();
});

}

var winorlose = function () {
	if (computerChoice == playerChoice) {
		result = "Tie";
	};
	if (computerChoice == "Scissors") {
		if (playerChoice == "Paper") {
			result = "Scissors cuts Paper - Computer wins";
			compScore = compScore + 1;
		};
		if (playerChoice == "Rock") {
			result = "Rock crushes Scissors - Player wins";
			playScore = playScore + 1;
		};
		if (playerChoice == "Lizard") {
			result = "Scissors decapitates Lizard - Computer wins";
			compScore = compScore + 1;
		};
		if (playerChoice == "Spock") {
			result = "Spock smashes Scissors - Player wins";
			playScore = playScore + 1;
		};
	};
	if (computerChoice == "Paper") {
		if (playerChoice == "Rock") {
			result = "Paper covers Rock - Computer wins";
			compScore = compScore + 1;
		};
		if (playerChoice == "Scissors") {
			result = "Scissors cut Paper - Player wins";
			playScore = playScore + 1;
		};
		if (playerChoice == "Lizard") {
			result = "Lizard eats Paper - Player wins";
			playScore = playScore + 1;
		};
		if (playerChoice == "Spock") {
			result = "Paper disproves Spock - Computer wins";
			compScore = compScore + 1;
		};
	};
	if (computerChoice == "Rock") {
		if (playerChoice == "Paper") {
			result = "Paper covers Rock - Player wins";
			playScore = playScore + 1;
		};
		if (playerChoice == "Scissors") {
			result = "Rock crushes Scissors - Computer wins";
			compScore = compScore + 1;
		};
		if (playerChoice == "Lizard") {
			result = "Rock crushes Lizard - Computer wins";
			compScore = compScore + 1;
		};
		if (playerChoice == "Spock") {
			result = "Spock vaporizes Rock - Player wins";
			playScore = playScore + 1;
		};
	};
	if (computerChoice == "Lizard") {
		if (playerChoice == "Paper") {
			result = "Lizard eats Paper - Computer wins";
			compScore = compScore + 1;
		};
		if (playerChoice == "Rock") {
			result = "Rock crushes Lizard - Player wins";
			playScore = playScore + 1;
		};
		if (playerChoice == "Scissors") {
			result = "Scissors decapitates Lizard - Player wins";
			playScore = playScore + 1;
		};
		if (playerChoice == "Spock") {
			result = "Lizard poisons Spock - Computer wins"
			compScore = compScore + 1;
		};
	};
	if (computerChoice == "Spock") {
		if (playerChoice == "Paper") {
			result = "Paper disproves Spock - Player wins";
			playScore = playScore + 1;
		};
		if (playerChoice == "Rock") {
			result = "Spock vaporises Rock - Computer wins";
			compScore = compScore + 1;
		};
		if (playerChoice == "Lizard") {
			result = "Lizard poisons Spock- Player wins";
			playScore = playScore + 1;
		};
		if (playerChoice == "Scissors") {
			result = "Spock smashes Scissors - Computer wins";
			compScore = compScore + 1;
		};
	};
	displayResults();
}

var displayResults = function () {
	$("#result").empty();
	$("#result").append($("<p>").text(result));
	$("#result").append($("<p>").text('Player wins '+playScore));
	$("#result").append($("<p>").text('Computer wins '+compScore));
}

	// Scisssor cut Paper
	// Paper covers Rock
	// Rock crushes Lizard
	// Lizard poisons Spock
	// Spock smashes Scissors
	// Scisssor decapitates Lizard
	// Lizard eats Paper
	// Paper disproves Spock
	// Spock vaporizes Rock
	// Rock crushes Scissors

$("#selector").append($("<p id=classic>").text("Rock/Paper/Scissors"));
$("#selector").append($("<p>").text("or"));
$("#selector").append($("<p id=nonclassic>").text("Rock/Paper/Scissors/Lizard/Spock"));

$("#classic").click(function() {
	game = 1;
	rules();
});

$("#nonclassic").click(function() {
	game = 2;
	rules();
});

