const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiusc = () => String.fromCharCode(rand(65, 91));
const geraMinusc = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = `!@#$%^&*()_+[]{}|;:,.<>?`;
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qntd, maiusc, minusc, numeros, simbolos) {
  const senhaArray = [];
  qntd = Number(qntd);

  for (let i = 0; i < qntd; i++) {
    if (maiusc) senhaArray.push(geraMaiusc());
    if (minusc) senhaArray.push(geraMinusc());
    if (numeros) senhaArray.push(geraNumero());
    if (simbolos) senhaArray.push(geraSimbolo());
  }
  return senhaArray.join(``).slice(0, qntd);
}
