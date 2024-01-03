console.log("hello");
const chotu = document.getElementById("pause");
const bar = document.getElementById("bar");
const master = document.getElementById("mplay");
const audioElements = Array.from(document.querySelectorAll(".playSong audio"));
const playicons = document.querySelectorAll(".playSong i");
let audioelemnt = new Audio("song 1.mp3");



// audioElements.forEach((element, i)=>{
//   console.log(element,i);
  

  

//   audioelements.src = `song ${i}.mp3`;

// });





master.onclick = () => {
  if (audioelemnt.paused || audioelemnt <= 0) {
    console.log("hi");
    audioelemnt.play();
    chotu.classList.remove("fa-play");
    chotu.classList.add("fa-pause");
    master.classList.remove("fa-play");
    master.classList.add("fa-pause");
  } else {
    audioelemnt.pause();

    master.classList.remove("fa-pause");
    master.classList.add("fa-play");
    chotu.classList.remove("fa-pause");
    chotu.classList.add("fa-play");
  }
};
audioelemnt.addEventListener("timeupdate", () => {
  console.log("time update is working");
  progress = parseInt((audioelemnt.currentTime / audioelemnt.duration) * 100);
  console.log(progress);
  bar.value = progress;
});

document.body.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    console.log("Space pressed");

    if (audioelemnt.paused) {
      audioelemnt.play();
      chotu.classList.remove("fa-play");
      chotu.classList.add("fa-pause");
      master.classList.remove("fa-play");
      master.classList.add("fa-pause");
    } else {
      audioelemnt.pause();

      master.classList.remove("fa-pause");
      master.classList.add("fa-play");
      chotu.classList.remove("fa-pause");
      chotu.classList.add("fa-play");
    }
  }
});

bar.addEventListener("change", () => {
  audioelemnt.currentTime = bar.value*audioelemnt.duration/100;
});
