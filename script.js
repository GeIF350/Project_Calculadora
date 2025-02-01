let resultado=0;
const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
function buttonSoma(){
    let soma;
    soma = parseFloat(numero1.value)+parseFloat(numero2.value);
    resultado = soma;
    document.getElementById("result").innerHTML=""+resultado;
    document.getElementById("resultado").innerHTML=""+resultado;
};
    
function buttonMinus(){
    let subtracao;
    subtracao = parseFloat(numero1.value)-parseFloat(numero2.value);
    resultado = subtracao;
    document.getElementById("result").innerHTML=""+resultado;
    document.getElementById("resultado").innerHTML=""+resultado;
};
    
function buttonMult(){
    let mult;
    mult = parseFloat(numero1.value)*parseFloat(numero2.value);
    resultado = mult;
    document.getElementById("result").innerHTML=""+resultado;
    document.getElementById("resultado").innerHTML=""+resultado;
};
    
function buttonDiv(){
    let div;
    div = parseFloat(numero1.value)/parseFloat(numero2.value);
    resultado = div;
    document.getElementById("result").innerHTML=""+resultado;
    document.getElementById("resultado").innerHTML=""+resultado;
};
