//DESTINOS

const pilhaInicial = document.getElementById("inicial");
const pilhaMeio = document.getElementById("meio");
const pilhaFinal = document.getElementById("final");

//TORRES

torreInicial.classList.add("torre");
pilhaInicial.appendChild(torreInicial);
const torreMeio = document.createElement('div');
torreMeio.classList.add("torre");
pilhaMeio.appendChild(torreMeio);
const torreFinal = document.createElement('div');
torreFinal.classList.add("torre");
pilhaFinal.appendChild(torreFinal);

//DISCOS 

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

const jogar = function (event) {
    const escolhido = event.currentTarget;
    const selecionado = event.currentTarget.lastElementChild;
    if (atual === "" && selecionado.classList.value !== "torre") {
        atual = selecionado;
    } else {
        if (selecionado.classList.value === "torre" && atual !== "") {
            escolhido.appendChild(atual);
            atual = "";
        } else if (escolhido.childElementCount >= 1 && selecionado.clientWidth > atual.clientWidth) {
            escolhido.appendChild(atual);
            atual = "";
        }
        if (selecionado.clientWidth < atual.clientWidth) {
            alert("Ops! Movimento inválido :(")
            atual = "";
        }
        if (pilhaMeio.childElementCount === 5 || pilhaFinal.childElementCount === 5) {
            alert("Muito bom! Você venceu :D")
        }
    }
}

pilhaInicial.addEventListener('click', jogar);
pilhaMeio.addEventListener('click', jogar);
pilhaFinal.addEventListener('click', jogar);