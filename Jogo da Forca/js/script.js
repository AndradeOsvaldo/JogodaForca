let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let iniciar = false;
let palavraLista = [];
let erro = [];

const palavras = [
    palavra001 = {
        nome: "BRASIL",
        categoria:"PAÍS"
    },
    palavra002 = {
        nome: "SALINAS",
        categoria:"CIDADES"
    },
    palavra003 = {
        nome: "CHILE",
        categoria:"PAÍS"
    },
    palavra004 = {
        nome: "RUBELITA",
        categoria:"CIDADE"
    },
    palavra005 = {
        nome: "BUTUMIRIM",
        categoria:"CIDADE"
    },
    palavra006 = {
        nome: "TAIOBEIRAS",
        categoria:"CIDADE"
    },
    palavra007 = {
        nome: "PARAGUAI",
        categoria:"PAÍS"
    },
    palavra008 = {
        nome: "BRASILIA",
        categoria:"CIDADE"
    },
    palavra009 = {
        nome: "AFRICA",
        categoria:"PAÍS"
    },
    palavra010 = {
        nome: "MEXICO",
        categoria:"PAÍS"
    },
    palavra011 = {
        nome: "AUTOMOVEL",
        categoria:"TRANSPORTE"
    },
    palavra012 = {
        nome: "LANCHA",
        categoria:"TRANSPORTE"
    },
    palavra013 = {
        nome: "NAVIO",
        categoria:"TRANSPORTE"
    },
    palavra014 = {
        nome: "ONIBUS",
        categoria:"TRANSPORTE"
    },
    palavra015 = {
        nome: "MOTOCICLETA",
        categoria:"TRANSPORTE"
    },
    palavra016 = {
        nome: "BARCO",
        categoria:"TRANSPORTE"
    },
    palavra017 = {
        nome: "AVIAO",
        categoria:"TRANSPORTE"
    },
    palavra018 = {
        nome: "TREM",
        categoria:"TRANSPORTE"
    },
    palavra019 = {
        nome: "CAIAQUE",
        categoria:"TRANSPORTE"
    },
    palavra020 = {
        nome: "FISICA",
        categoria:"MATERIAS"
    },
    palavra021 = {
        nome: "MOUSE",
        categoria:"OBJETOS"
    },
    palavra022 = {
        nome: "TECLADO",
        categoria:"OBJETOS"
    },
    palavra023 = {
        nome: "MONITOR",
        categoria:"OBJETOS"
    },
    palavra024 = {
        nome: "BORRACHA",
        categoria:"OBJETOS"
    },
    palavra025 = {
        nome: "COELHO",
        categoria:"ANIMAIS"
    },
    palavra026 = {
        nome: "CELULAR",
        categoria:"OBJETOS"
    },
    palavra027 = {
        nome: "NOTEBOOK",
        categoria:"OBJETOS"
    },
    palavra028 = {
        nome: "GALINHA",
        categoria:"ANIMAIS"
    },
    palavra029 = {
        nome: "APONTADOR",
        categoria:"OBJETOS"
    },

    palavra030 = {
        nome: "HIPOPOTAMO",
        categoria:"ANIMAIS"
    }
];

function start() {
    if(palavraLista.length > 0){
        for(var i = 0; i < palavraLista.length; i++){
            document.getElementById("tecla-" + palavraLista[i]).disabled = false;
            document.getElementById("tecla-" + palavraLista[i]).style.background = 'rgb(100, 100, 100)';
            document.getElementById("tecla-" + palavraLista[i]).style.color  ='black';
        }
        palavraLista = []
    }
    document.getElementById('palavra-secreta').innerHTML = "";
    document.getElementById('letrasErradas').innerHTML = "<div>Letras Erradas: </div>";
    listaDinamica = [];
    tentativas = 6;
    criarPalavraSecreta();
    montarPalavraNaTela();
    carregaImagemForca();
    iniciar = true;

}

function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)}

function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = "Dica: " + palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
   
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function exibirPalavrasErradas(letra){
    const palavraTelaErrada = document.getElementById('letrasErradas');
    var div = document.createElement('div');
    div.textContent = letra;
    div.classList = 'erradas'
    palavraTelaErrada.appendChild(div);
}

function verificaLetraEscolhida(letra) {
    if (iniciar == true){
        document.getElementById("tecla-" + letra).disabled = true;
        palavraLista.push(letra);
        if (tentativas > 0) {
                mudarStyleLetra("tecla-" + letra)
                if(comparalistas(letra) == 1){
                    montarPalavraNaTela();
                }
                else{
                    exibirPalavrasErradas(letra);
                }
        }
    }

}


function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#D9B00B";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("NÃO FOI DESSA VEZ", "Infelizmente você PERDEU... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
        return 0;
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!", "Você GANHOU!!");
        tentativas = 0;
    }
    return 1;
}


function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./images/forca1.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./images/forca2.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./images/forca3.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./images/forca4.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./images/forca5.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./images/forca6.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./images/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});