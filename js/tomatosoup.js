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

		var elapsedTimeString = elapsedMinutesDisplay + ":" + elapsedSecondsDisplay;

		$('.tomatosoup-elapsed').text(prettyTimeString(Math.floor(elapsedTimeInSeconds / 60)) + ":" + prettyTimeString(Math.floor(elapsedTimeInSeconds % 60)));
		$('.tomatosoup-remaining').text(prettyTimeString(Math.floor(remainingTimeInSeconds / 60) + ":" +  prettyTimeString(Math.floor(remainingTimeInSeconds % 60));

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