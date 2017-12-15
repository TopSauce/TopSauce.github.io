var h2 = $("h2");
var datePicker = $("input[name='datePicker']");
datePicker.val("2018-04-21T00:00");
var countDownDate = new Date(datePicker.val()).getTime();

var sound = new Howl({
	src: ['./app/assets/party_horn-Mike_Koenig-76599891.wav']
});



console.log(countDownDate)
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
	if(distance < 1000) {
		h2.addClass("finished");
	}

	if(distance < 1000 && distance > -1000) {
		sound.play();
	}
}



function timer() {
	setInterval(function() {
		clock();
	}, 1000)
}



datePicker.change(function() {
	console.log(datePicker.val());
	h2.removeClass("finished");
	countDownDate = new Date(datePicker.val()).getTime();
	clock();

});