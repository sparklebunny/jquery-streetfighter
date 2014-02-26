$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	});
	$(".ryu").mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	});
	$(".ryu").mousedown(function(){
		//play hadouken sound

		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show();

		//animate to right of screen

	});
	$(".ryu").mouseup(function(){
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();

	});
});