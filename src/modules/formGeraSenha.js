import geraSenha from './geradores.js';

const rangeCaracteres = document.querySelector(`.qntCaracteres`);
const numero = document.querySelector(`.numeroCaracteres`);

rangeCaracteres.addEventListener(`input`, () => {
  numero.innerHTML = rangeCaracteres.value;
});

const btnNumeros = document.querySelector(`.btnNumeros`);
const btnSimbolos = document.querySelector(`.btnSimbolos`);
const btnMaiusc = document.querySelector(`.btnMaiusc`);
const btnMinusc = document.querySelector(`.btnMinusc`);

btnNumeros.addEventListener(`click`, (e) => {
  e.preventDefault();

  btnNumeros.classList.toggle(`botaoApertado`);
});
btnSimbolos.addEventListener(`click`, (e) => {
  e.preventDefault();
  btnSimbolos.classList.toggle(`botaoApertado`);
});
btnMaiusc.addEventListener(`click`, (e) => {
  e.preventDefault();
  btnMaiusc.classList.toggle(`botaoApertado`);
});
btnMinusc.addEventListener(`click`, (e) => {
  e.preventDefault();
  btnMinusc.classList.toggle(`botaoApertado`);
});

function gera() {
  const qntd = Number(rangeCaracteres.value);
  const numero = btnNumeros.classList.contains('botaoApertado');
  const maiusc = btnMaiusc.classList.contains('botaoApertado');
  const minusc = btnMinusc.classList.contains('botaoApertado');
  const simbol = btnSimbolos.classList.contains('botaoApertado');

  if (qntd === 0) return `Não é possível gerar senha com 0 caracteres!`;

  if (
    numero === false &&
    maiusc === false &&
    minusc === false &&
    simbol === false
  )
    return `Selecione alguma opção!`;

  const senha = geraSenha(qntd, maiusc, minusc, numero, simbol);
  return senha;
}

const btnGerar = document.querySelector(`.btnGerar`);
const senhaGerada = document.querySelector(`.senhaGerada`);

export default () => {
  btnGerar.addEventListener(`click`, (e) => {
    e.preventDefault();
    senhaGerada.innerHTML = gera();
  });
};
