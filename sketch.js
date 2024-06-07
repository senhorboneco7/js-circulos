let palavra;
let corPalavra;// a cor das palavras exibidas na tela

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
  corPalavra = corAleatoria();
}

function corAleatoria() {
  return color(random(0, 255), random(0, 255), random(0, 255));
}

function mousePressed() {
  palavra = palavraAleatoria();
  corPalavra = corAleatoria();
}

function palavraAleatoria() {
  let palavras = ["Aula", "Tecnologia", "Robótica", "2ª Série A", "Seu Boneco"];
  return random(palavras);
}


function inicializaCores() {
  background("yellow");
  fill(corPalavra);
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
  modoNoturno();
}

function modoNoturno(hora) {  
  
  let horaAtual = hour();
  
  if (horaAtual >= 18) {
    console.log("Você precisa ligar o modo escuro!");
  } else {
    console.log("Modo noturno não é necessário neste momento.");
  }
}
