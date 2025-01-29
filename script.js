let resultado=0;
const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
if(onclick==buttonSoma){
    function buttonSoma(){
        let soma;
        soma = parseFloat(numero1.value)+parseFloat(numero2.value);
        resultado = soma;
        console.log(soma);
        document.getElementById("result").innerHTML=""+resultado;
        document.getElementById("resultado").innerHTML=""+resultado;
    };
}
if(onclick==buttonMinus){
    function buttonMinus(){
        let subtracao;
        subtracao = parseFloat(numero1.value)-parseFloat(numero2.value);
        resultado = subtracao;
        console.log(subtracao);
        document.getElementById("result").innerHTML=""+resultado;
        document.getElementById("resultado").innerHTML=""+resultado;
    };
}
if(onclick==buttonMult){
    function buttonMult(){
        let mult;
        mult = parseFloat(numero1.value)*parseFloat(numero2.value);
        resultado = mult;
        console.log(mult);
        document.getElementById("result").innerHTML=""+resultado;
        document.getElementById("resultado").innerHTML=""+resultado;
    };
}
if(onclick==buttonDiv){
    function buttonDiv(){
        let div;
        div = parseFloat(numero1.value)/parseFloat(numero2.value);
        resultado = div;
        console.log(div);
        document.getElementById("result").innerHTML=""+resultado;
        document.getElementById("resultado").innerHTML=""+resultado;
    };
}
