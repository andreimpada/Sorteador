





// animação botão
const btn = document.getElementById('btn');


btn.addEventListener('mouseenter', function() {
  btn.classList.add('is-active')
});

btn.addEventListener('mouseleave', function() {
  btn.classList.remove('is-active')
});