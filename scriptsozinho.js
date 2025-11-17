//capturando objetos

const btn = document.getElementById('btn');
const rng1 = document.getElementById('rng1');
const rng2 = document.getElementById('rng2');
const checkbox = document.getElementById('checkbox');
const nmqt = document.getElementById('nmqt');
const configView = document.getElementById('config-view');
const resultView = document.getElementById('result-view');



//botão hover

btn.addEventListener('mouseenter', function () {
  btn.classList.add('is-active')
});

btn.addEventListener('mouseleave', function () {
  btn.classList.remove('is-active')
});

btn.addEventListener('click', function () {

  let resultado = [];

  //checkbox
  const naoRepetir = checkbox.checked;

  //transformando valores em números
  let rng1n = parseInt(rng1.value,10);
  let rng2n = parseInt(rng2.value,10);
  let nmqtn = parseInt(nmqt.value,10);

  //validações

  if (rng1.value == '' || rng2.value == '' || nmqt.value == '') {
    alert('Por favor, preencha todos os campos.')
    return;
  }

  if (rng1n > rng2n) {
    alert('O valor inicial não pode ser maior que o valor final.')
    return;
  }

  if (nmqtn < 0) {
    alert('A quantidade de números não pode ser negativa.')
    return;
  }

  if (naoRepetir && nmqtn > (rng2n - rng1n + 1)) {
    alert('A quantidade de números não pode ser maior que o intervalo quando a opção "Não repetir número" estiver selecionada.')
    return;
  }

  // logica do sorteio

  for (let i = 0; i < nmqtn; i++) {
    let numAleatorio;

    if (naoRepetir) {
      do {
        numAleatorio = Math.floor(Math.random() * (rng2n - rng1n + 1)) + rng1n;
      } while (resultado.includes(numAleatorio));
    } else {
      numAleatorio = Math.floor(Math.random() * (rng2n - rng1n + 1)) + rng1n;
    }
    resultado.push(numAleatorio);
  }
  resultado.sort((a,b) => a -b);
  console.log(resultado);

  //trocando o config para result
  configView.classList.toggle('esconder');
  resultView.classList.toggle('esconder');
});









