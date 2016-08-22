/* 
Welcome and thank you for using Phynn's MTG Commander Pod Generator!

To use, simply type in the number of players currently participating in your event in the variable below and the program will automatically generate an appropriate number of pods, sized to fit your group of players, as well as assign each player to a pod! Enjoy!
*/

// Change the value of this variable to begin!
var number_of_players = 10;






// Code //
{
	// Variables & Math
	var pod_sizes = [];
	var player_indexes = [];
	var shuffled_pods = [];
	var difference = ceil(number_of_players / 4) * 4 - number_of_players;



	// Calculate How Many Pods of Four There Should Be
	for (var i = 0; i < ceil(number_of_players / 4) - difference; i++) {
		pod_sizes.push(4);
	}

	// Calculate How Many Pods of Three There Should Be
	for (var i = 0; i < difference; i++) {
		pod_sizes.push(3);
	}

	// Create a List of Numbers Corisponding to Each Player
	for (var i = 1; i <= number_of_players; i++) {
		player_indexes[player_indexes.length] = i;
	}

	// Randomize the List of Players
	var shuffle_array = function (array) {
		var j, x, i;
		for (i = array.length; i; i--) {
			j = floor(random() * i);
			x = array[i - 1];
			array[i - 1] = array[j];
			array[j] = x;
		}
	};
	shuffle_array(player_indexes);

	// Separate the Randomized List into a list for Each Pod
	for (var i = 0; i < pod_sizes.length; i++) {
		shuffled_pods[i] = player_indexes.slice(0, pod_sizes[i]);
		for (var j = 0; j < pod_sizes[i]; j++) {
			player_indexes.shift();
		}
	}

	// Display Pod Sizes
	println("Pod Sizes:\n" + pod_sizes + "\n\n");

	// Display Pods
	println("Randomized Pod Assignments:");
	for (var i = 0; i < shuffled_pods.length; i++) {
		println("Pod " + (i + 1) + ": " + shuffled_pods[i]);
	}

	// EDH Logo
	background(242, 225, 148);

	fill(160, 140, 80);
	stroke(0, 0, 0);
	strokeWeight(10);
	beginShape();
	vertex(200, 50);
	vertex(350, 120);
	vertex(350, 350);
	vertex(50, 350);
	vertex(50, 120);
	vertex(200, 50);
	endShape();

	beginShape();
	vertex(200, 20);
	vertex(260, 50);
	vertex(260, 300);
	vertex(140, 300);
	vertex(140, 50);
	vertex(200, 20);
	endShape();

	beginShape();
	vertex(200, 230);
	vertex(370, 300);
	vertex(370, 370);
	vertex(30, 370);
	vertex(30, 300);
	vertex(200, 230);
	endShape();

	strokeWeight(1);
	for (var i = 0; i < 60; i++) {
		stroke(220 - i, 200 - i, 140 - i);
		strokeWeight(5);
		line(200 + i, 20 + i / 2, 200 + i, 370);
		line(200 - i, 20 + i / 2, 200 - i, 370);
	}

	strokeWeight(10);
	stroke(0, 0, 0);
	noFill();
	beginShape();
	vertex(200, 20);
	vertex(260, 50);
	vertex(260, 254);
	vertex(200, 230);
	vertex(140, 254);
	vertex(140, 50);
	vertex(200, 20);
	endShape();

	beginShape();
	vertex(200, 230);
	vertex(370, 300);
	vertex(370, 370);
	vertex(30, 370);
	vertex(30, 300);
	vertex(200, 230);
	endShape();

}
