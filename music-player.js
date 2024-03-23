document.getElementById('musicFile').addEventListener('change', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const file = this.files[0];
    const objectUrl = URL.createObjectURL(file);
    audioPlayer.src = objectUrl;
    audioPlayer.play(); // Start playback immediately
});

