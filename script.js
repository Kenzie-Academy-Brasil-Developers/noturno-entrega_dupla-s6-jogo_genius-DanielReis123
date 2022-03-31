const secaoJogo = document.getElementById('gameGenius');
const botaoJogar = document.getElementById('btJogar');
const nivel = document.getElementById('nivel');
const corVerde = document.getElementById('1');

let result = 0
nivel.innerText = result

let arrResultRandomColor = []
let coresClicadas = []

let max = 4 

botaoJogar.addEventListener('click', function(randomColor){
  console.log(arrResultRandomColor)
  console.log(max)
  for(let i = 0; i < max; i++){
    arrResultRandomColor.push(Math.floor(Math.random() * 4 + 1))
  }
    coresClicadas = []
})

secaoJogo.addEventListener('click', function(event){
  
  const clicouCor = event.target.id
  coresClicadas.push(parseInt(clicouCor))

  if(comparacao()) {
    console.log('passou')
  } else {
    alert("Tente novamente")
    result = 0
    nivel.innerText = result
  }
  if(arrResultRandomColor.length === coresClicadas.length){
    result += 1
    nivel.innerText = result
    max += result
    alert("Acertou Miserávi! Clique em 'Jogar' para novo nível")
    arrResultRandomColor = []
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

function incrementoNv(){
}



