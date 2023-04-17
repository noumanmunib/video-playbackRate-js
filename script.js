const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

const handlePlayback = function (e) {
  // console.log(e);
  const y = e.clientY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const height = Math.round(percent * 100) + "%";
  bar.style.height = height;
  // console.log(height);
  const min = 0.3;
  const max = 5;
  const playbackRate = percent * (max - min) + min;
  console.log(playbackRate);

  bar.textContent = playbackRate.toFixed(1) + "x";

  video.playbackRate = playbackRate;
};

speed.addEventListener("mousemove", handlePlayback);
