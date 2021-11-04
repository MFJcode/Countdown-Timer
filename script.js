
const newYears = '1 Jan 2022';

function countdown() {
    const newYarsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYarsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const Seconds = Math.floor(totalSeconds % 60);

    console.log(days, hours, minutes, Seconds);

}

// initial call
countdown();

setInterval(countdown, 1000);

