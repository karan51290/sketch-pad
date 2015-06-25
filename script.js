var squares = prompt("Enter the number of squares in one row (1 to 50)");
var option = "";

var render = function(squares){
	if(squares<=50&&squares>0){
		var toAdd =  "<div class='cell'></div>";
		var square_total = squares*squares;
		var cell_dim = (500/squares)-2;

		$(document).ready(function(){
			console.log("document ready");
			console.log(cell_dim);
		
	
			for(i = 0; i<square_total;i++){
				console.log("added"+ " " +i);
				$("#gridbox").append(toAdd);
			}
	
			$(".cell").css("height",cell_dim);
			$(".cell").css("width",cell_dim);
		});	
	}
	else{
		alert("You can only add upto 50 squares")
		squares = prompt("Enter the number of squares in one row (1 to 25)");	
		render(squares);	
	}	
}

var reset = function(){
	$("#gridbox").css("background-image","none");
	$(".cell").css("background-color","black");	
	option = "";
	$(".cell").css("opacity","1");
}

var color = function(){
	reset();
	option = "color";	
	//$(".cell").css("opacity","1");
	//$("#gridbox").css("background-image","none");
}

var scratch = function(){
	reset();
	option = "scratch";
	$("#gridbox").css("background-image","url('Capture.PNG')");	
}

var trail = function(){
	reset();
	option = "trail";	
}

render(squares);



$(document).ready(function(){
	$(".cell").mouseenter(function(){
		switch(option){
			case "scratch":
				rand = $(this).css("opacity");
				rand = rand-0.2;
				rand = rand.toString();
				console.log(rand);
				$(this).css("opacity", rand);	
				break;
			case "trail":
				$(this).css('opacity', 0);
				$(this).fadeTo('slow', 1);
				console.log("fadeOut");
				break;
			case "color":
				var rand = Math.random();
				rand = parseInt((rand*1000000));
				rand = rand.toString();
				rand = "#" + rand;
				console.log(rand);
				$(this).css("background-color", rand);	
				break;
			default:
				$(this).css("background-color", "white");
		}
	});
});