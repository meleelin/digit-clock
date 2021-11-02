var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");

var clock = setInterval(
    function time() {
        var dateNow = new Date();
        var hr = dateNow.getHours();
        var min = dateNow.getMinutes();
        var sec = dateNow.getSeconds();


        hour.textContent = hr;
        minute.textContent = min;
        seconds.textContent = sec;
    }
)