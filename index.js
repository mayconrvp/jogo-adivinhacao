let numeroSorteado = 0;
let numeroTentativas = 1;

let inputChute = document.getElementById('numeroChute');
let divResp = document.getElementById('divResp');
let btnEnvio = document.getElementById("btnEnvia");


btnEnvio.disabled = true;

//Event to disable/enable button
inputChute.addEventListener("input", function(event){
    let conteudo = inputChute.value;

    if (conteudo !== null && conteudo !== '' && conteudo>=0 && conteudo<=10) {
      btnEnvio.disabled = false;
    } else {
      btnEnvio.disabled = true;
    }
});

function sortearNumero(){
    numeroTentativas = 1;
    numeroSorteado = Math.floor(Math.random() * 10) + 1;
    inputChute.disabled = false;
    inputChute.value = "";
    inputChute.style.backgroundColor = "white"
    divResp.classList.remove('desabilited');
}

function validarChute(){
    const valor = inputChute.value;
    if(valor == numeroSorteado){
        btnEnvio.disabled = true;
        inputChute.disabled = true;
        inputChute.style.backgroundColor = "#AAD6A0"
        if(numeroTentativas == 1){
            textTentativas = "Bom de Chute! Você acertou de Primeira!"
        }
        bootbox.alert({
            title: 'Parabéns!! Você acertou!',
            message: `<span style="color:green">O número sorteado foi o número <b>${numeroSorteado}</b></span><br/>Número de Tentativas: ` + numeroTentativas
        });
    }else{
        inputChute.value = "";
        btnEnvio.disabled = true;

        bootbox.alert({
            title: 'Não foi dessa vez :(',
            message: '<span style="color:red">Resposta errada..</span> Mas não desanime e tente novamente!<br/>Número de Tentativas: ' + numeroTentativas
        });
    }
    numeroTentativas++;
}

window.onload = function exampleFunction() {
    btnEnvio.disabled = true;
    inputChute.disabled = true;
}