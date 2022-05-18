//variaveis carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros =[2, 3, 4, 5, 3, 2];
let comprimentoCarro = 50;
let alturaCarro = 40;

 
function mostraCarro() {
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for(let i = 0; i < xCarros.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }

}

function passouTodaATela(xCarros){
  return xCarros < - 50;
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
      if(passouTodaATela(xCarros[i])){
        xCarros[i] = 600;
  }
  
  }
}



