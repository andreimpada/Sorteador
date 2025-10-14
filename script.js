//pega o value dos inputs
var nmqt = document.getElementById("nmqt");
var rng1 = document.getElementById("rng1");
var rng2 = document.getElementById("rng2");
var checkbox = document.getElementById("checkbox");
const configView = document.getElementById('config-view');
const resultView = document.getElementById('result-view');
const listaResultados = document.getElementById('lista-resultados');

function roll() {
  // capturo o value dos imputs/checkbox
  naoRepetir = checkbox.checked;
  quantidade = nmqt.value;
  minimo = rng1.value;
  maximo = rng2.value;

  //verifico se estão vazios.

  if (quantidade == "" || minimo == "" || maximo == "") {
    alert("Preencha todos os campos.");
    return;
  }

  //transforma string em number
  quantidade = Number(nmqt.value);
  minimo = Number(rng1.value);
  maximo = Number(rng2.value);

  //validação dos inputs

  if (quantidade < 1) {
    alert("A quantidade de números deve ser pelo menos 1.");
    return;
  }

  if (minimo > maximo) {
    alert("O valor mínimo não pode ser maior que o máximo.");
    return;
  }

  let resultadosSorteio = [];

  if (naoRepetir) {
    // logica sem repetição
    while (resultadosSorteio.length < quantidade) {
      let numeroGerado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
      if (!resultadosSorteio.includes(numeroGerado)) {
        resultadosSorteio.push(numeroGerado);
      }
    }
  } else {
    for (let i = 0; i < quantidade; i++) {
      let numeroGerado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
      resultadosSorteio.push(numeroGerado);
    }
  }

  //mostrar o resultado

  let htmlLista = '';
  resultadosSorteio.forEach(numero => {
    htmlLista += `<li>${numero}</li>`;
  });

  listaResultados.innerHTML = htmlLista;

  // trocar o html para aparecer o resultado
  configView.style.display = 'none';
  resultView.style.display = 'block';





  // animação botão
  const btn = document.getElementById('btn');

  // Verifica se o botão existe antes de tentar adicionar eventos (boa prática)
  if (btn) {
    btn.addEventListener('mouseenter', function () {
      btn.classList.add('is-active');
    });

    btn.addEventListener('mouseleave', function () {
      btn.classList.remove('is-active');
    });
  }
}