console.log("My Javascript works");

$(document).ready(function() {
  console.log("jQuery ready!");

  $("img").on("click", function(event) {
	var arrow = event.target;
	
	var subList = $(arrow).siblings(".sublist");
	if($(subList).hasClass("show")){
		$(subList).removeClass("show");
		$(arrow).removeClass("flip");
	} else {
		$(subList).addClass("show");
		$(arrow).addClass("flip");
	}
});
});