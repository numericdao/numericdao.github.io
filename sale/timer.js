function updateTimer() {
    future = Date.parse("April 29, 2022 05:30:00 pm");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div><span>' + d + '</span> <span class="stat_title"> days </span>' +
        '<span>' + h + '</span><span class="stat_title"> hours </span>' +
        '<span>' + m + '</span><span class="stat_title"> minutes </span>' +
        '<span>' + s + '</span><span class="stat_title"> seconds </span></div>';
}
setInterval('updateTimer()', 1000);
