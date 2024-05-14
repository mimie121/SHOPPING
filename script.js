const bar = document.getElementById('mobile');
const close = document.getElementById('close-bar');
const nav = document.getElementById('nav-pp');


if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  
})
}

if (close) {
  close.addEventListener('click', () => {
      nav.classList.remove('active');

})
}