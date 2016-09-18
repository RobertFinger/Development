$(document).ready(function () {
	$("input").checkboxradio();

	$("#p1Ready").click(function () {
		PlayerOneWins();
	});

	$("#p2Ready").click(function () {
		PLayerTwoWins();
	});

	$("#reset").click(function () {
		ResetImages();
	});

});


function ResetImages() {
	
	$('#playerOneImage').attr('src', '../Content/Images/bugs_bunny.jpg');
	$('#playerTwoImage').attr('src', '../Content/Images/bugs_bunny.jpg');
}

function PLayerTwoWins() {

	$('#playerOneImage').attr('src', '../Content/Images/Lose.jpg');
	$('#playerTwoImage').attr('src', '../Content/Images/tauntLeft.jpg');
}


function PlayerOneWins() {

	$('#playerOneImage').attr('src', '../Content/Images/tauntRight.jpg');
	$('#playerTwoImage').attr('src', '../Content/Images/Lose.jpg');
}