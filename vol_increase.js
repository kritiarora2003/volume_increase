const video = document.querySelector('video');

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const source = audioCtx.createMediaElementSource(video);
const gainNode = audioCtx.createGain();

gainNode.gain.value = 3.0; // 🔊 3x volume (try 1.5–4)

source.connect(gainNode);
gainNode.connect(audioCtx.destination);
