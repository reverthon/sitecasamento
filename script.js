function countdown() {
    const weddingDate = new Date("October 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeleft = weddingDate - now;

    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (timeleft < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Já estamos casados!";
    }
}

const x = setInterval(countdown, 1000);
