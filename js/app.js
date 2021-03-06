$(document).ready(function() {
	$('.ryu').mouseenter(function() { 
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	}).mouseleave(function() {
    	$('.ryu-still').show();
    	$('.ryu-ready').hide();
  	}).mousedown(function() {
  		playHadouken();
  		$('.ryu-ready').hide();
  		$('.ryu-throwing').show();
  		$('.hadouken').finish().show()
  			.animate(
  				{'left': '1020px'}, 
  				500,
  				function() { 
  					$(this).hide();
  					$(this).css('left', '520px');
  				}
  			);
  	}).mouseup(function() {
  		$('.ryu-throwing').hide();
  		$('.ryu-ready').show();
  	});
  	$('body').keydown(function(event) {
  		if(event.keyCode != 88) {return;}
  		$('.ryu-still').hide();
  		$('.ryu-ready').hide();
  		$('.ryu-throwing').hide();
 		$('.ryu-cool').show();
  	}).keyup(function(event){
  		if(event.keyCode != 88) {return;}
  		$('.ryu-still').show();
  		$('.ryu-cool').hide();
  	});
});
function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}