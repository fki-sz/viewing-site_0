const video = document.getElementById("myVideo");
const playBtn = document.getElementById("playBtn");
const seekBar = document.getElementById("seekBar");

// 再生ボタンタップ
playBtn.addEventListener("click", () => {
  video.play();
  playBtn.classList.add("hidden");
  seekBar.classList.remove("visible");
});

// 動画タップで再生/停止
video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playBtn.classList.add("hidden");
    seekBar.classList.remove("visible");
  } else {
    video.pause();
    playBtn.classList.remove("hidden");
    seekBar.classList.add("visible");
  }
});

// 再生終了でUI表示
video.addEventListener("ended", () => {
  playBtn.classList.remove("hidden");
  seekBar.classList.add("visible");
});

// 再生中にバー追従
video.addEventListener("timeupdate", () => {
  seekBar.value = video.currentTime;
});

// 再生準備後に最大値設定
video.addEventListener("loadedmetadata", () => {
  seekBar.max = video.duration;
});

// シーク操作で位置移動
seekBar.addEventListener("input", () => {
  video.currentTime = seekBar.value;
});
