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
    var aux = "";
    for(let i = 0; i < operacao.length; i++){
        if(operacao[i] == "+" || operacao[i] == "-" || operacao[i] == "*" || operacao[i] == "/"){
            operacaoConstruida.push(aux);
            operacaoConstruida.push(operacao[i]);
            aux = "";
        }else{
            aux = aux + operacao[i];
        }
    }
    operacaoConstruida.push(aux);
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
        realizaOperacao(operacao);
    }else{
        operacao = operacao + button.value;
        document.getElementById("display").innerHTML = "<p class='valoresDisplay'>"+operacao+"</p>"
    }
}

var realizaOperacao = (operacao) => {
    operacao = constroiOperacao(operacao);
    console.log(operacao);
    resultado = parseInt(operacao[0]) + resultado;
    for(let i = 0; i < operacao.length; i++){
        if(operacao[i] == "+"){
            resultado = resultado + parseInt(operacao[i+1]);
        }else if(operacao[i] == "-"){
            resultado = resultado - parseInt(operacao[i+1]);
        }else if(operacao[i] == "*"){
            resultado = resultado * parseInt(operacao[i+1]);
        }else if(operacao[i] == "/"){
            resultado = resultado / parseInt(operacao[i+1]);
        }else{
            continue;
        }
    }
    document.getElementById("display").innerHTML = "<p class='valoresDisplay'>"+resultado+"</p>";
}
