//Local de destino 
const pilhaInicial = document.getElementById("inicial");
 const pilhaMeio = document.getElementById("meio");
 const pilhaFinal = document.getElementById("final");
 const main = document.getElementById('divPilhas')

// Torres
const torreInicial = document.createElement('div');
torreInicial.classList.add("torre");
pilhaInicial.appendChild(torreInicial);
const torreMeio = document.createElement('div');
torreMeio.classList.add("torre");
pilhaMeio.appendChild(torreMeio);
const torreFinal = document.createElement('div');
torreFinal.classList.add("torre");
pilhaFinal.appendChild(torreFinal);


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
pilhaInicial.appendChild(disco1)

const disco2 = document.createElement('div')
disco2.classList.add('disco','dois')
pilhaInicial.appendChild(disco2)

const disco3 = document.createElement('div')
disco3.classList.add('disco','tres')
pilhaInicial.appendChild(disco3)

const disco4 = document.createElement('div')
disco4.classList.add('disco','quatro')
pilhaInicial.appendChild(disco4)



//FUNÇÕES E EVENTOS

let atual= ""


const jogar= function (event) {
const escolhido= event.currentTarget;
const ultimo= event.currentTarget.lastElementChild;
console.log(ultimo)
console.log(escolhido)

if(ultimo.clientWidth===atual.clientWidth){
    atual= ""
}else if (atual==="" && ultimo.classList.value !=='torre'){
atual= ultimo;
}else{

    if(ultimo.classList.value==="torre" && atual !== ""){
        escolhido.appendChild(atual)
        atual="";
        
    }else if(escolhido.childElementCount >= 1 && ultimo.clientWidth > atual.clientWidth){
        escolhido.appendChild(atual);
        atual=""
    }
}



}

pilhaInicial.addEventListener('click', jogar)
pilhaMeio.addEventListener('click', jogar)
pilhaFinal.addEventListener('click', jogar)