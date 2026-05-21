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
"portfolio/trabalho13.png",
"portfolio/trabalho14.png",
"portfolio/trabalho15.png",
"portfolio/trabalho16.png",
"portfolio/trabalho17.png",
"portfolio/trabalho18.png",
"portfolio/trabalho19.png",
"portfolio/trabalho20.png",
"portfolio/trabalho21.png",
"portfolio/trabalho22.png",
"portfolio/trabalho23.png",
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



