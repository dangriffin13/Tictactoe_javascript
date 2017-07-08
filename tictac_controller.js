
var grid = [
		["upperleft", "uppercenter", "upperright"],
		["centerleft", "centercenter", "centerright"],
		["lowerleft", "lowercenter", "lowerright"]
		]

var player = "O"

function checkWin(){

	console.log("checking for win");

	listsOfThree = [
	[grid[0][0], grid[0][1], grid[0][2]],
	[grid[1][0], grid[1][1], grid[1][2]],
	[grid[2][0], grid[2][1], grid[2][2]],

	[grid[0][0], grid[1][0], grid[2][0]],
	[grid[0][1], grid[1][1], grid[2][1]],
	[grid[0][2], grid[1][2], grid[2][2]],

	[grid[0][0], grid[1][1], grid[2][2]],
	[grid[2][0], grid[1][1], grid[0][2]]
	]

	for (var i = 0; i < listsOfThree.length; i++){
		console.log("checking list "+i);
		if (listsOfThree[i][0] === listsOfThree[i][1] && listsOfThree[i][1] === listsOfThree[i][2]){
			console.log("found a winner")
			return true
		}
	}
}

function gridUpdate(gridLocation){

	for (var i = 0; i < grid.length; i++){
		for (var j = 0; j < grid[i].length; j++){
			if (gridLocation === grid[i][j]){
				grid[i][j] = player;
			}
		}
	}
}

function endGame(){
	alert("Player "+player+" wins!");
	
	$(".col-md-4").empty()

	grid = [
		["upperleft", "uppercenter", "upperright"],
		["centerleft", "centercenter", "centerright"],
		["lowerleft", "lowercenter", "lowerright"]
		]
}

function tictacController(){
	// $("#uppercenter").click(function(){
	// 	$("#uppercenter").html("<p>x</p>")
	// })

	//need to change this to be X or O depending on user
	$(".col-md-4").on('click',function(event){
		$(this).html("<p>"+player+"</p>")
		console.log(event.target.id);
		console.log($(this).text())
		if $(this).text() === ("X" || "O"){
			alert("That square has already been played.  Click on a blank square.");
		} else {
			gridUpdate(event.target.id);
		}
		
		if (checkWin() === true) {
			endGame();
		}
		if (player === "O") {
			player = "X";
		} else {
			player = "O";
		}
	})

}



$(document).ready( function (){
	console.log("document ready");

	tictacController()
});