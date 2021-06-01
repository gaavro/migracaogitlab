//Local de destino

const main = document.getElementById('divPilhas')

//Pilhas

const pilhaInicio = document.createElement('div')
pilhaInicio.classList.add('pilha','inicial')
main.appendChild(pilhaInicio)

const pilhaMeio = document.createElement('div')
pilhaMeio.classList.add('pilha','meio')
main.appendChild(pilhaMeio)

const pilhaFinal = document.createElement('div')
pilhaFinal.classList.add('pilha','final')
main.appendChild(pilhaFinal)

const pilhas = document.querySelectorAll(".pilha")

//console.log(pilhas)

//Discos

const disco1 = document.createElement('div')
disco1.classList.add('disco','um')
pilhaInicio.appendChild(disco1)

const disco2 = document.createElement('div')
disco2.classList.add('disco','dois')
pilhaInicio.appendChild(disco2)

const disco3 = document.createElement('div')
disco3.classList.add('disco','tres')
pilhaInicio.appendChild(disco3)

const disco4 = document.createElement('div')
disco4.classList.add('disco','quatro')
pilhaInicio.appendChild(disco4)

//FUNÇÕES E EVENTOS


//Você precisa fazer o jogador clicar duas vezes para cada movimento:
//primeiro para selecionar a torre de origem, e depois para selecionar a torre de destino.
//Use uma variável para registrar qual modo o jogador está.

let pilhaAtual = 0

const game = (evt) => {
let elementoAtual = evt.currentTarget.lastElementChild
    if(elementoAtual.className.includes("disco")){
    pilhaAtual = elementoAtual
    }
    if(elementoAtual.className.includes("pilha") && pilhaAtual!==0){
        elementoAtual.appendChild(pilhaAtual)
        pilhaAtual=0
    }
    console.log("elementoAtual:",elementoAtual)
    console.log("pilhaAtual:", pilhaAtual)
}
for(let i=0; i < pilhas.length; i++){
pilhas[i].addEventListener("click", game)
}


//Adicione um handler de clique em cada uma das três torres. 
//Use event.currentTarget dentro do handler de evento para determinar qual torre foi clicada.



//Use a propriedade DOM childElementCount para saber quantos discos estão em uma torre.



//Use a propriedade DOM lastElementChild para saber qual é o disco no topo da torre.



//Use o método DOM appendChild() para adicionar um disco a uma torre 
//(você já usou este método várias vezes em tarefas anteriores). 
//Observe que quando você usa appendChild em um elemento que já tem um pai, 
//ele é automaticamente removido do pai anterior e adicionado no novo.



//Use a propriedade Element.clientWidth para pegar o tamanho dos discos.