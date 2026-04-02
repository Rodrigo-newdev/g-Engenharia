let imagens = [
"portfolio/trabalho01.png",
"portfolio/trabalho02.png",
"portfolio/trabalho03.png",
"portfolio/trabalho04.png",
"portfolio/trabalho05.png",
"portfolio/trabalho06.png",
"portfolio/trabalho07.png",
"portfolio/trabalho08.png",
"portfolio/trabalho09.png",
"portfolio/trabalho10.png",
"portfolio/trabalho11.png",
"portfolio/trabalho12.png",
];

let indice = 0;

function avancar(){
    indice++;
    if(indice >= imagens.length){
        indice = 0;
    }
    document.getElementById("imagemPortfolio").src = imagens[indice];
}

function voltar(){
    indice--;
    if(indice < 0){
        indice = imagens.length - 1;
    }
    document.getElementById("imagemPortfolio").src = imagens[indice];
}



