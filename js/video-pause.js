var videoPlaying = null;

const onPlay = function () {
    if (videoPlaying && videoPlaying != this) {
        videoPlaying.pause()
    }
    videoPlaying = this
}

// init event handler
const videos = document.getElementsByClassName("gallery-video-style")
for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener("play", onPlay)
} 