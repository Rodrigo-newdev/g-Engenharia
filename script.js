let portfolio = [

{
    imagem: "portfolio/trabalho01.png",
    titulo: "Projetos Arquitetônicos"
},

{
    imagem: "portfolio/trabalho02.png",
    titulo: "Projetos Arquitetônicos"
},

{
    imagem: "portfolio/trabalho03.png",
    titulo: "Projetos Arquitetônicos"
},

{
    imagem: "portfolio/trabalho04.png",
    titulo: "Projetos Arquitetônicos"
},

{
    imagem: "portfolio/trabalho05.png",
    titulo: "Projetos Arquitetônicos"
},

{
    imagem: "portfolio/trabalho06.png",
    titulo: "Projetos Arquitetônicos"
},

{
    imagem: "portfolio/trabalho07.png",
    titulo: "Projetos Arquitetônicos"
},

{
    imagem: "portfolio/trabalho08.png",
    titulo: "Projetos Arquitetônicos"
},

{
    imagem: "portfolio/trabalho09.png",
    titulo: "Projetos Estruturais"
},

{
    imagem: "portfolio/trabalho10.png",
    titulo: "Projetos Estruturais"
},

{
    imagem: "portfolio/trabalho11.png",
    titulo: "Projetos Estruturais"
},

{
    imagem: "portfolio/trabalho12.png",
    titulo: "Projetos Estruturais"
},

{
    imagem: "portfolio/trabalho13.png",
    titulo: "Projetos Estruturais"
},

{
    imagem: "portfolio/trabalho14.png",
    titulo: "Projetos Estruturais"
},

{
    imagem: "portfolio/trabalho15.png",
    titulo: "Execução e Administração de Obras"
},

{
    imagem: "portfolio/trabalho16.png",
    titulo: "Execução e Administração de Obras"
},

{
    imagem: "portfolio/trabalho17.png",
    titulo: "Execução e Administração de Obras"
},

{
    imagem: "portfolio/trabalho18.png",
    titulo: "Execução e Administração de Obras"
},

{
    imagem: "portfolio/trabalho19.png",
    titulo: "Execução e Administração de Obras"
},

{
    imagem: "portfolio/trabalho20.png",
    titulo: "Execução e Administração de Obras"
},

{
    imagem: "portfolio/trabalho21.png",
    titulo: "Regularização de Imóveis"
},

{
    imagem: "portfolio/trabalho22.png",
    titulo: "Regularização de Imóveis"
},

{
    imagem: "portfolio/trabalho23.png",
    titulo: "Regularização de Imóveis"
}

];

let indice = 0;

function atualizarPortfolio(){

    document.getElementById("imagemPortfolio").src =
    portfolio[indice].imagem;

    document.getElementById("tituloPortfolio").innerText =
    portfolio[indice].titulo;
}

function avancar(){

    indice++;

    if(indice >= portfolio.length){

        indice = 0;
    }

    atualizarPortfolio();
}

function voltar(){

    indice--;

    if(indice < 0){

        indice = portfolio.length - 1;
    }

    atualizarPortfolio();
}