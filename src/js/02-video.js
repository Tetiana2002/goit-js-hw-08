import throttle from "lodash.throttle";
import Player from '@vimeo/player';
const currentTimeKey = "videoplayer-current-time";
const player = document.querySelector("iframe");
const videoPlayer = new Player(player, {
    loop: true,
    fullscreen: true,
    quality: "1080p"
});
const currentTime = function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem(currentTimeKey,JSON.stringify(seconds))
}
videoPlayer.setCurrentTime(localStorage.getItem(currentTimeKey) || 0);
videoPlayer.on("timeupdate", throttle(currentTime, 1000));

