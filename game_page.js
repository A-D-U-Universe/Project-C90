player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("Player1_name").innerHTML = player1_name + " : ";
document.getElementById("Player2_name").innerHTML = player2_name + " : ";

document.getElementById("Player1_score").innerHTML = player1_score ;
document.getElementById("Player2_score").innerHTML = player2_score ;

document.getElementById("Question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("Answer").innerHTML = "Answer Turn - " + player2_name ;



