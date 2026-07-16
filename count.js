const target = new Date("Mar 1, 2027 12:00:00").getTime();

const a = document.getElementById("audio");
const b = document.getElementById("musicBtn");

b.onclick = () => {
    if (a.paused) {
        a.play()
        .then(() => {
            b.textContent = "⏸ Pause Music";
        })
        .catch(error => {
            console.log("Music error:", error);
        });
    } else {
        a.pause();
        b.textContent = "▶ Play Music";
    }
};

function p(n){
    return String(n).padStart(2,"0");
}

function t(){
    let r = target - Date.now();

    if(r <= 0){
        document.querySelector(".timer").style.display="none";
        document.getElementById("done").innerHTML="🎉<br>Freedom.<br>The car is finally paid off.";
        clearInterval(i);
        return;
    }

    let s = Math.floor(r / 1000);

    day.textContent = Math.floor(s / 86400);
    hour.textContent = p(Math.floor(s % 86400 / 3600));
    min.textContent = p(Math.floor(s % 3600 / 60));
    sec.textContent = p(s % 60);
}

t();

const i = setInterval(t,1000);
