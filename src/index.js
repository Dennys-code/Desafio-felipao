let nomePersonagem = "Lucian";
let quantidadeDeExp = 5325;
let nivel;

if (quantidadeDeExp <= 1000) {
  nivel = "Ferro";
} else if (quantidadeDeExp <= 2000) {
  nivel = "Bronze";
} else if (quantidadeDeExp <= 5000) {
  nivel = "Prata";
} else if (quantidadeDeExp <= 7000) {
  nivel = "Ouro";
} else if (quantidadeDeExp <= 8000) {
  nivel = "Platina";
} else if (quantidadeDeExp <= 9000) {
  nivel = "Ascendente";
} else if (quantidadeDeExp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

console.log("O herói de nome " + nomePersonagem + " está no nível " + nivel)
