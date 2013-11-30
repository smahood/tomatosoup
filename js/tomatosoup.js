$(function(){
	var tomatosoup = {};
	tomatosoup.pomodoro={interval: 2, break:2};

	console.log(tomatosoup);
	testCountDown();
	countDown(2);
});

function testCountDown(){
	// Move these tests into unit tests
	var interval;
	var minutes;
	var seconds;

	interval=2;
	minutes=1;
	seconds=0;

	console.log("Interval:" + interval, ", Minutes:" + minutes + ", Seconds:" +		seconds + ", Remaining Time:" + remainingTime(interval, minutes, seconds));
}



function countDown(intervalInMinutes){
	// Adapted from http://stackoverflow.com/a/12787430
	var start = new Date;
	$('.tomatosoup-elapsed').text("00:00");
	$('.tomatosoup-remaining').text(prettyTimeString(intervalInMinutes) + ':00');
	$('.tomatosoup-interval').text(prettyTimeString(intervalInMinutes) + ':00');
	var intervalInSeconds = intervalInMinutes * 60;

	var pomodoroTimer = setInterval(function() {
		var elapsedTimeInSeconds = Math.floor((new Date - start) / 1000);
		var remainingTimeInSeconds = intervalInSeconds - elapsedTimeInSeconds;

		console.log(elapsedTimeInSeconds);
		console.log(remainingTimeInSeconds);
		
		var elapsedMinutesDisplay = prettyTimeString(Math.floor(elapsedTimeInSeconds / 60));
		var elapsedSecondsDisplay = prettyTimeString(Math.floor(elapsedTimeInSeconds % 60));
		var remainingMinutesDisplay = prettyTimeString(Math.floor(remainingTimeInSeconds / 60));
		var remainingSecondsDisplay = prettyTimeString(Math.floor(remainingTimeInSeconds % 60));

		var elapsedTimeString = elapsedMinutesDisplay + ":" + elapsedSecondsDisplay;


		// var total_seconds = elapsedTimeInSeconds % 3600;
		

		// var seconds = Math.floor(total_seconds);
		// remainingTimeInSeconds = intervalInSeconds - seconds;
		// var minutes = Math.floor(total_seconds / 60);
		// total_seconds = total_seconds % 60;

		// var seconds = Math.floor(total_seconds);
		// console.log(minutes);
		// console.log(seconds);
		// minutes = prettyTimeString(minutes);
		// seconds = prettyTimeString(seconds);

		// var timeRemainingString = 2;
		// var currentTimeString = minutes + ":" + seconds;
		
		$('.tomatosoup-elapsed').text(elapsedMinutesDisplay + ":" + elapsedSecondsDisplay);
		$('.tomatosoup-remaining').text(remainingMinutesDisplay + ":" + remainingSecondsDisplay);

		}, 1000);
}

function remainingTime(intervalInMinutes, elapsedMinutes, elapsedSeconds){
	var intervalInSeconds = intervalInMinutes*60;
	var totalElapsedInSeconds = elapsedMinutes*60 + elapsedSeconds;
	var remainingSeconds = intervalInSeconds - totalElapsedInSeconds;

	return prettyTimeString(Math.floor(remainingSeconds / 60)) + ":" + prettyTimeString(remainingSeconds%60);
}


function prettyTimeString(num) {
    return ( num < 10 ? "0" : "" ) + num;
  }