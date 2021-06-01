//Local de destino 

    const main = document.getElementById('divPilhas')

//Pilhas

const inicio = document.createElement('div')
inicio.classList.add('pilha','inicial')
main.appendChild(inicio)

const meio = document.createElement('div')
meio.classList.add('pilha','meio')
main.appendChild(meio)

const final = document.createElement('div')
final.classList.add('pilha','final')
main.appendChild(final)

//Discos

const disco1 = document.createElement('div')
disco1.classList.add('disco','um')
inicio.appendChild(disco1)

const disco2 = document.createElement('div')
disco2.classList.add('disco','dois')
inicio.appendChild(disco2)

const disco3 = document.createElement('div')
disco3.classList.add('disco','tres')
inicio.appendChild(disco3)

const disco4 = document.createElement('div')
disco4.classList.add('disco','quatro')
inicio.appendChild(disco4)



//FUNÇÕES E EVENTOS


const discos= document.querySelectorAll(".disco")
const pilhas= document.querySelectorAll(".pilha")


let pilhaAtual=0
const game=(evt)=>{
let elementoAtual= evt.currentTarget.lastElementChild
 if(elementoAtual.className.includes("disco")){
    pilhaAtual= elementoAtual
        console.log(pilhaAtual)
  }
}
for(let i=0; i < pilhas.length; i++){
    pilhas[i].addEventListener("click", game)
}
const adicionar= (evt)=>{
let elementoAtual=evt.currentTarget.lastElementChild
    if(elementoAtual.className.includes("pilha") && pilhaAtual!==0){
        elementoAtual.appendChild(pilhaAtual)
            console.log(pilhaAtual)
                pilhaAtual=0
    }
}
for(let i=0; i <pilhas.length;i++){
    pilhas[i].addEventListener("click",adicionar )
}
