//pega o value dos inputs
var nmqt = document.getElementById("nmqt");
var rng1 = document.getElementById("rng1");
var rng2 = document.getElementById("rng2");
var checkbox = document.getElementById("checkbox");

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

  alert ("Tudo certo ate aqui");

}



// animação botão
const btn = document.getElementById('btn');


btn.addEventListener('mouseenter', function () {
  btn.classList.add('is-active')
});

btn.addEventListener('mouseleave', function () {
  btn.classList.remove('is-active')
});