var playerOneScore = 0;
var playerTwoScore = 0;
var playerOneReady = false;
var playerTwoReady = false;

$(document).ready(function() {

	Reset();

	$("input").checkboxradio();


	$("#p1Ready").click(function() {
		playerOneReady = true;
	});

	$("#p2Ready").click(function() {
		playerTwoReady = true;
	});

	$("#reset").click(function() {
		Reset();
		playerOneReady = false;
		playerTwoReady = false;
	});

	$("#play").click(function() {
		DetermineWinner();
	});

});


function EvaluateUserInput() {
	var playerOneNumber = GetRandomNumber();
	$("#p1Text").val(playerOneNumber);
	var playerOneIsEven = isEven(playerOneNumber);

	var playerTwoNumber = GetRandomNumber();
	$("#p2Text").val(playerTwoNumber);

	var playerTwoIsEven = isEven(playerTwoNumber);
	var totalIsEven = isEven(playerOneNumber + playerTwoNumber);

	if ($("#checkbox-1").prop("checked") == true && !playerOneIsEven) {
		playerOneScore++;
	} else if ($("#checkbox-1").prop("checked") == true) {
		playerOneScore--;
	}

	if ($("#checkbox-5").prop("checked") == true && !playerOneIsEven) {
		playerTwoScore++;
	} else if ($("#checkbox-5").prop("checked") == true) {
		playerTwoScore--;
	}


	if ($("#checkbox-2").prop("checked") == true && !playerTwoIsEven) {
		playerOneScore++;
	} else if ($("#checkbox-2").prop("checked") == true) {
		playerOneScore--;
	}

	if ($("#checkbox-6").prop("checked") == true && !playerTwoIsEven) {
		playerTwoScore++;
	} else if ($("#checkbox-6").prop("checked") == true) {
		playerTwoScore--;
	}


	if ($("#checkbox-3").prop("checked") == true && !totalIsEven) {
		playerOneScore++;
	} else if ($("#checkbox-3").prop("checked") == true) {
		playerOneScore--;
	}

	if ($("#checkbox-7").prop("checked") == true && !totalIsEven) {
		playerTwoScore++;
	} else if ($("#checkbox-7").prop("checked") == true) {
		playerTwoScore--;
	}


	if ($("#checkbox-4").prop("checked") == true && totalIsEven) {
		playerOneScore++;
	} else if ($("#checkbox-4").prop("checked") == true) {
		playerOneScore--;
	}

	if ($("#checkbox-8").prop("checked") == true && totalIsEven) {
		playerTwoScore++;
	} else if ($("#checkbox-8").prop("checked") == true) {
		playerTwoScore--;
	}


	$("#p1Score").val(playerOneScore);
	$("#p2Score").val(playerTwoScore);
}

function isEven(number) {
	return (number % 2 === 0);
}

function DetermineWinner() {
	if (playerOneReady == true && playerTwoReady == true) {

		EvaluateUserInput();

		if (playerOneScore > playerTwoScore) {
			PlayerOneWins();
		} else if (playerOneScore < playerTwoScore) {
			PlayerTwoWins();
		} else {
			alert("a tie? awww. try again.");
			Reset();
		}
	} else {
		if (!playerOneReady) {

			alert("Player One Isn't Ready");
		} else {
			alert("Player Two Isn't Ready");
		}
	}
}

function GetRandomNumber() {
	return Math.floor((Math.random() * 100) + 1);
}


function Reset() {


	$("#p1Text").val("Number");
	$("#p2Text").val("Number");

	$("#p1Score").val("Score");
	$("#p2Score").val("Score");

	if ($("#checkbox-1").prop("checked", true)) {
		$("#checkbox-1").click()
	};
	if ($("#checkbox-2").prop("checked", true)) {
		$("#checkbox-2").click()
	};
	if ($("#checkbox-3").prop("checked", true)) {
		$("#checkbox-3").click()
	};
	if ($("#checkbox-4").prop("checked", true)) {
		$("#checkbox-4").click()
	};
	if ($("#checkbox-5").prop("checked", true)) {
		$("#checkbox-5").click()
	};
	if ($("#checkbox-6").prop("checked", true)) {
		$("#checkbox-6").click()
	};
	if ($("#checkbox-7").prop("checked", true)) {
		$("#checkbox-7").click()
	};
	if ($("#checkbox-8").prop("checked", true)) {
		$("#checkbox-8").click()
	};


	$("#playerOneImage").attr("src", "../Content/Images/bugs_bunny.jpg");
	$("#playerTwoImage").attr("src", "../Content/Images/bugs_bunny.jpg");
}

function PlayerTwoWins() {

	$("#playerOneImage").attr("src", "../Content/Images/Lose.jpg");
	$("#playerTwoImage").attr("src", "../Content/Images/tauntLeft.jpg");
}


function PlayerOneWins() {

	$("#playerOneImage").attr("src", "../Content/Images/tauntRight.jpg");
	$("#playerTwoImage").attr("src", "../Content/Images/Lose.jpg");
}