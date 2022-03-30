const secaoJogo = document.getElementById('gameGenius');
const botaoJogar = document.getElementById('btJogar');
const nivel = document.getElementById('nivel');
const corVerde = document.getElementById('1');

nivel.innerText = 0

const arrResultRandomColor = []
let coresClicadas = []

let max = 4 + parseInt(nivel.innerText)

botaoJogar.addEventListener('click', function(randomColor){
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

console.log(arrResultRandomColor)
console.log(coresClicadas)