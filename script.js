const imagem = document.querySelector(".container__imagem");
const button = document.querySelector(".container__button");

function acender(){
    imagem.innerHTML = "<img src='imagens/acesa.jpg' alt='Lâmpada acesa'>";
    button.innerHTML = "<button onclick='apagar()'><span>Apagar</span></button>";
}

function apagar(){
    imagem.innerHTML = "<img src='imagens/apagada.jpg' alt='Lâmpada apagada'>";
    button.innerHTML = "<button onclick='acender()'><span>Acender</span></button>";
}


