var countDownDate = new Date("Dec 8, 2017 14:00:00").getTime();
var h2 = $("h2");

clock();
timer();

function clock() {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	h2.html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
}

function timer() {
	setInterval(function(){
		clock();
	}, 1000)
}