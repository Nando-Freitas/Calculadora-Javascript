var operacao = "0";
var resultado = 0;
var valorInicial = 0;

var iniciaCalculadora = () => {
    document.getElementById("display").innerHTML = "<p class='valoresDisplay'>"+valorInicial+"</p>";
    deletaValorInicial();
}

var deletaValorInicial = () => {
    operacao = "";
    return operacao;
}

var reinicia = () => {
    document.location.reload(true);
}

var constroiOperacao = () =>{
    var operacaoConstruida = [];
    for(let i = 0; i < operacao.length; i++){
        operacaoConstruida.push(operacao[i]);
    }
    return operacaoConstruida;
}

function pressBtn(button){
    if(button.value == "+"){
        operacao = operacao + button.value;
        document.getElementById("display").innerHTML = "<p class='valoresDisplay'>"+operacao+"</p>";
    }else if(button.value == "-"){
        operacao = operacao + button.value;
        document.getElementById("display").innerHTML = "<p class='valoresDisplay'>"+operacao+"</p>";
    }else if(button.value == "*"){
        operacao = operacao + button.value;
        document.getElementById("display").innerHTML = "<p class='valoresDisplay'>"+operacao+"</p>";
    }else if(button.value == "/"){
        operacao = operacao + button.value;
        document.getElementById("display").innerHTML = "<p class='valoresDisplay'>"+operacao+"</p>";
    }else if(button.value == "="){
        multiplicaDivide(operacao);
    }else{
        operacao = operacao + button.value;
        document.getElementById("display").innerHTML = "<p class='valoresDisplay'>"+operacao+"</p>"
    }
}

var multiplicaDivide = (operacao) => {
    operacao = constroiOperacao(operacao);
    for(let i = 0; i < operacao.length; i++){
        if(operacao[i] == "*"){
            resultado = parseInt(operacao[i-1]) * parseInt(operacao[i+1]);
            delete operacao[i];
            delete operacao[i+1];
            operacao[i-1] = resultado;
        }else if(operacao[i] == "/"){
            resultado = parseInt(operacao[i-1]) / parseInt(operacao[i+1]);
            delete operacao[i];
            delete operacao[i+1];
            operacao[i-1] = resultado;
        }else{
            continue;
        }
    }
    console.log(operacao);
}

/*
var realizaOperacao = (operacao) => {
    operacao = constroiOperacao(operacao);
    resultado = parseInt(operacao[0]) + resultado;
    for(let i = 0; i < operacao.length; i++){
        if(operacao[i] == "*"){
            resultado = resultado * parseInt(operacao[i+1]);
        }else if(operacao[i] == "/"){
            resultado = resultado / parseInt(operacao[i+1]);
        }else if(operacao[i] == "+"){
            resultado = resultado + parseInt(operacao[i+1]);
        }else if(operacao[i] == "-"){
            resultado = resultado - parseInt(operacao[i+1]);
        }else{
            continue;
        }
    }
    document.getElementById("display").innerHTML = "<p class='valoresDisplay'>"+resultado+"</p>";
}
*/
