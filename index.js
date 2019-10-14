window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  
  pads.forEach((pad, index) => {
    pad.addEventListener('click', () => {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });

  });

  // Create Bubble
  const createBubbles = (index) => {
    const bubble = document.createElement('div');
    const colors = getComputedStyle(pads[index]).backgroundColor;
    pads[index].appendChild(bubble);
    bubble.style.backgroundColor = colors;
    bubble.style.animation = 'visual 1s ease-in';
    bubble.addEventListener('animationend', () => {
      pads[index].removeChild(bubble);
    });
  }
});