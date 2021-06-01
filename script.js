const pilhaInicial = document.getElementById("inicial");
const pilhaMeio = document.getElementById("meio");
const pilhaFinal = document.getElementById("final");

const torreInicial = document.createElement('div');
torreInicial.classList.add("torre");
pilhaInicial.appendChild(torreInicial);
const torreMeio = document.createElement('div');
torreMeio.classList.add("torre");
pilhaMeio.appendChild(torreMeio);
const torreFinal = document.createElement('div');
torreFinal.classList.add("torre");
pilhaFinal.appendChild(torreFinal);

const disco1 = document.createElement('div');
disco1.classList.add("disco", "um");
pilhaInicial.appendChild(disco1);
const disco2 = document.createElement('div');
disco2.classList.add("disco", "dois");
pilhaInicial.appendChild(disco2);
const disco3 = document.createElement('div');
disco3.classList.add("disco", "tres");
pilhaInicial.appendChild(disco3);
const disco4 = document.createElement('div');
disco4.classList.add("disco", "quatro");
pilhaInicial.appendChild(disco4);





let atual = "";

const game = function (event) {
    const escolhido = event.currentTarget;
    const selecionado = event.currentTarget.lastElementChild;
    if (atual === "" && selecionado.classList.value !== "torre") {
        atual = selecionado;
       
    } else {
        if (selecionado.classList.value === "torre" && atual !== "") {
            escolhido.appendChild(atual);
            atual.classList.remove("flutua")
            atual = "";
           
        } else if (escolhido.childElementCount >= 1 && selecionado.clientWidth > atual.clientWidth) {
            escolhido.appendChild(atual);
            atual = "";
          
        }
    }
    
}
pilhaInicial.addEventListener('click', game);
pilhaMeio.addEventListener('click', game);
pilhaFinal.addEventListener('click', game);