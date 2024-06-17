let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("16");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("rgb(252,210,242)");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  
  let recomendacao = geraRecomendacao (idade, gostaDeFantasia, gostaDeAventura);
  fill(color("rgb(248,119,219)"));
  textAlign(CENTER, CENTER)
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura){
  if (idade >= 10) {
    if(idade >= 14) {
      return "16 Desejos"
    } else {
      if(idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Percy Jackson e o ladrão de raios";
        } else {
          return "Enola Holmes"
        }
      } else {
      if(gostaDeFantasia) {
        return  "Harry Potter e o calice de fogo"
      } else {
        return "Alice no país das maravilhas";
      }
      }
   }
  } else {
    if(gostaDeFantasia) {
    return "Barbie como rapunzel";
    } else {
      return "Garfield";
    }
  }
}