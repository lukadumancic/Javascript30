
const playSound = event => {
  const { keyCode } = event;
  const audio = document.querySelector(`audio[data-key="${keyCode}"`);
  const key = document.querySelector(`.key[data-key="${keyCode}"`);
  if (audio && key) {
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }
};
window.addEventListener('keydown', playSound);

const removeTransition = event => {
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key =>
  key.addEventListener('transitionend', removeTransition)
);
