var operacao = "0";
var resultado = 0;

function inicia(){
    document.getElementById("display").innerHTML = "<p class='valoresDisplay'>"+operacao+"</p>";
    operacao = ""
}

function reinicia(){
    document.location.reload(true);
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

function realizaOperacao(operacao){
    for(let i = 0; i < operacao.length; i++){
        if(operacao.indexOf("+") == true){
            operacao = operacao.split("+");
            resultado = resultado + parseInt(operacao[i+1]);
            operacao = operacao[i+1];
            console.log(operacao)
        }else if(operacao.indexOf("*") == true){
            operacao = operacao.split("*");
            resultado = resultado * parseInt(operacao[i+1]);
            operacao = operacao[i+1];
            console.log(operacao)
        }else if(operacao.indexOf("/") == true){
            operacao = operacao.split("/");
            resultado = resultado / parseInt(operacao[i+1]);
            operacao = operacao[i+1];
        }else if(operacao.indexOf("-") == true){
            operacao = operacao.split("-");
            resultado = resultado - parseInt(operacao[i+1]);
            operacao = operacao[i+1];
        }else{
            continue;
        }
    }
    document.getElementById("display").innerHTML = "<p class='valoresDisplay'>"+resultado+"</p>";
}
