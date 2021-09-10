const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = seconds * (360 / 60) + 180;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const min = now.getMinutes();
    const minDegrees = min * (360 / 60) + (seconds / 60) * 6 + 180;
    minHand.style.transform = `rotate(${minDegrees}deg)`

    const hour = now.getHours();
    const hourDegrees = hour * (360 / 12) + 180 + (seconds / 3600) * 30 + (min / 60) * 30;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

    console.log(hour, min, seconds);
}

setInterval(setDate, 1000);
setDate();
