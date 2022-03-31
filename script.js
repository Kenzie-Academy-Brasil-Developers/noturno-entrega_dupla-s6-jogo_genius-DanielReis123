const secaoJogo = document.getElementById('gameGenius');
const botaoJogar = document.getElementById('btJogar');
const nivel = document.getElementById('nivel');
const corVerde = document.getElementById('1');
const corAmarela = document.getElementById('2');
const corAzul = document.getElementById('3');
const corVermelha = document.getElementById('4');

let result = 0
nivel.innerText = result

let arrResultRandomColor = []
let coresClicadas = []

let max = 4 

botaoJogar.addEventListener('click', function(randomColor){
  console.log(arrResultRandomColor)
  console.log(max)
  tocarSequencia()
  for(let i = 0; i < max; i++){
    arrResultRandomColor.push(Math.floor(Math.random() * 4 + 1))
  }
    coresClicadas = []
    botaoJogar.disabled = true
})

secaoJogo.addEventListener('click', function(event){
  
  const clicouCor = event.target.id
  coresClicadas.push(parseInt(clicouCor))

  if(comparacao()) {
    console.log('passou')
  } else {
    alert("Errooooou!")
    result = 0
    nivel.innerText = result
    coresClicadas = []
  }
  if(arrResultRandomColor.length === coresClicadas.length && arrResultRandomColor.length > 1){
    result += 1
    nivel.innerText = result
    max += result
    alert("Acertou Miserávi! Clique em 'Jogar' para novo nível")
    arrResultRandomColor = []
    botaoJogar.disabled = false
  }
})

function comparacao(){
  let verifica = true

  for(let i = 0; i < coresClicadas.length; i++){
    if(coresClicadas[i] !== arrResultRandomColor[i]){
      verifica = false
    }
  }
  return verifica
}

function tocarSequencia(){

  let corVerde2 = document.getElementsByClassName('corVerde')

  for(let i = 0; i < arrResultRandomColor.length; i++){
    if(arrResultRandomColor[0]) {
      setTimeout(() => {
        corVerde.classList.add('piscaVerde')
        setTimeout(() => {
          corVerde.classList.remove('piscaVerde')
        }, 500)
      }, 1000)
    } 
    if(arrResultRandomColor[i] === 1 && arrResultRandomColor[1]) {
      setTimeout(() => {
        corVerde.classList.add('piscaVerde')
        setTimeout(() => {
          corVerde.classList.remove('piscaVerde')
        }, 1500)
      }, 2500)
    }
  }
  
}






