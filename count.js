const targetDate = new Date("March 1, 2027");

const months = document.getElementById("months");
const done = document.getElementById("done");

function updateCountdown(){

    const now = new Date();

    let monthsLeft =
        (targetDate.getFullYear() - now.getFullYear()) * 12 +
        (targetDate.getMonth() - now.getMonth());

    if(now.getDate() > targetDate.getDate()){
        monthsLeft--;
    }

    if(monthsLeft <= 0){
        months.textContent = "00";
        done.innerHTML = "🎉 Freedom!";
        clearInterval(timer);
        return;
    }

    months.textContent = String(monthsLeft).padStart(2,"0");
}

updateCountdown();

const timer = setInterval(updateCountdown,1000);

const musicBtn = document.getElementById("musicBtn");
const audio = document.getElementById("audio");

musicBtn.addEventListener("click", () => {

    if(audio.paused){
        audio.play();
        musicBtn.textContent = "⏸ Pause Music";
    }else{
        audio.pause();
        musicBtn.textContent = "▶ Play Music";
    }

});
