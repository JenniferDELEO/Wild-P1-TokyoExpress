const image = document.getElementsByClassName('imgparallax');
new simpleParallax(image, {
  delay: 0.7,
  transition: 'cubic-bezier(0,0,0,2)',
});
