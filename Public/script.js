// Falling Flowers Effect
function createFlower() {
  const flower = document.createElement('img');
  flower.src = "Clipflower.png"; // palitan mo ng tamang path ng PNG mo
  flower.classList.add('flower');

  // random position
  flower.style.left = Math.random() * window.innerWidth + 'px';

  // random duration
  const duration = 6 + Math.random() * 4;
  flower.style.animationDuration = duration + 's';

  // random size at rotation
  flower.style.width = (20 + Math.random() * 40) + 'px';
  flower.style.transform = `rotate(${Math.random() * 360}deg)`;

  document.querySelector('.falling-flowers').appendChild(flower);

  setTimeout(() => flower.remove(), duration * 1000);
}
setInterval(createFlower, 800); // every 0.8s may bagong flower

// Falling Glitters Effect
function createGlitter() {
  const glitter = document.createElement('div');
  glitter.classList.add('glitter');

  // random position
  glitter.style.left = Math.random() * window.innerWidth + 'px';

  // random duration
  const duration = 3 + Math.random() * 3;
  glitter.style.animationDuration = duration + 's';

  // random size at rotation
  const size = 2 + Math.random() * 3;
  glitter.style.width = size + 'px';
  glitter.style.height = size + 'px';
  glitter.style.transform = `rotate(${Math.random() * 360}deg)`;

  document.querySelector('.falling-glitters').appendChild(glitter);

  setTimeout(() => glitter.remove(), duration * 1000);
}
setInterval(createGlitter, 300); // mas madalas para kumikislap
