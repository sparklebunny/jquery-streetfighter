$(document).ready(function() {
	$(".ryu").on("mouseenter", function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
		console.log("mouse enter event one")
	});
	$(".ryu").on("mouseleave", function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
		console.log("is this it");
	});
	$(".ryu").mousedown(function(){
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show()
			.animate(
  			{'left': '300px'},
  			500,
  			function() {
    		$(this).hide();
    		$(this).css('left', '-212px');
  		});

	});

	$(".ryu").mouseup(function(){
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});

	$(document).keydown(function(keyEvent) {
		if(keyEvent.keyCode == 88) {
			$(".ryu").off("mouseenter", "**");
			$(".ryu").off("mouseleave", "**");
			$(".ryu-cool").show();
			$(".ryu-ready").hide();
			$(".ryu-still").hide();
			$(".ryu-throwing").hide();
			// xpressed = true;
			
		}  
		else {

			$(".ryu-cool").hide();
			$(".ryu-ready").hide();
			$(".ryu-throwing").hide();
			$(".ryu-still").show();

		};

	});




});

// var xpressed = false;

// function throwIt() {
// 	if (xpressed) {
// 		$(".ryu-ready").show();
// 	} else {
// 		$(".ryu-still").show();
// 	}
// }

function playHadouken () {
	$("#hadouken-sound")[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
	
};



