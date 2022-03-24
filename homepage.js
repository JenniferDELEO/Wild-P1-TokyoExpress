const icon = document.getElementById('icon');
icon.onclick = function () {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.src = 'assets/sun.png';
  } else {
    icon.src = 'assets/lunes.png';
  }
};

const image = document.querySelector('.thumbnail');
new simpleParallax(image, {
  delay: 0.8,
  transition: 'cubic-bezier(0,0,0,1)',
});
