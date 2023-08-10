function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let direction = 'right';

document.addEventListener('keydown', function (event) {
  if (event.key == 'ArrowLeft' || event.key.toLocaleLowerCase() === 'a') {
    direction = 'left';
  } else if (event.key == 'ArrowUp' || event.key.toLocaleLowerCase() === 'w') {
    direction = 'up';
  } else if (
    event.key == 'ArrowRight' ||
    event.key.toLocaleLowerCase() === 'd'
  ) {
    direction = 'right';
  } else if (
    event.key == 'ArrowDown' ||
    event.key.toLocaleLowerCase() === 's'
  ) {
    direction = 'down';
  }
});

export { direction };
export { randomInteger };
