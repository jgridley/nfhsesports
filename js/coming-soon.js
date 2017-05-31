var countDownDate = new Date("Jan 1, 2018 15:37:25").getTime();

var countdownfunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("demo").innerHTML = "EXPIRED";
        return;
    }

    var seconds = Math.floor(distance / 1000);
    var minutes = Math.floor(seconds / 60);
    var seconds = seconds % 60;
    var hours = Math.floor(minutes / 60);
    var minutes = minutes % 60;
    var days = Math.floor(hours / 24);
    var hours = hours % 24;

    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);