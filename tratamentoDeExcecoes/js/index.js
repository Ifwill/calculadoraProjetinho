function operacao1(){
    let number = document.getElementById(onclick);
    console.log(43);
    document.getElementById("exibir").innerHTML = number;
}


function operacao(){
    let um = document.getElementById("um").value;
    let dois = document.getElementById("dois").value;
    let treis = document.getElementById("treis").value;
    let quatro = document.getElementById("quatro").value;
   
    if(onclick === "soma"){
        operacaoSoma(um,dois);
    }else if(onclick === "subtracao"){
        operacaoSubtracao(um,dois);
    }else if(onclick ==="divisao"){
        operacaoDivisao(um,dois);
    }else if(onclick === "multiplicacao"){
        operacaoMultiplicacao(um,dois);
    }
    
    
}

function operacaoSoma(){
    console.log(12);
}

function operacaoSubtracao(){
    console.log(30);
}

function operacaoDivisao(){
    console.log(45);
}

function operacaoMultiplicacao(){
    console.log(1000);
}

