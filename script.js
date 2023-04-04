let Calcular = document.getElementById("btn_calcular");


function calcImc()
{
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let resultado = document.getElementById("resultado");

    //condição 
    if(altura != "" && peso != "")
    {
        let imc = (peso / (altura*2)).toFixed(2);
        let mensagem = ""; 

        if(imc < 18.5){
            mensagem = "Você está magro!";
        }
        else if(imc < 25){
            mensagem = "Você está com um peso maneiro";
        }
        else if(imc < 30){
            mensagem = "Você está meio gordinho!";
        }
        else if(imc < 35){
            mensagem = "Cuidado! Você está com Obesidade";
        }
        else if(imc < 40){
            mensagem = "Cuidado! Você está Gordo e vai explodir!";
        }
        else{
            mensagem = "Já era :( \n Você é um planeta, e está explodindo!";
        }
        resultado.textContent = `Seu IMC é: ${imc}!\n ${mensagem}`
    }
    else
    {
        resultado.textContent = "Preencha todos os campos"
    }
}
Calcular.addEventListener('click', calcImc)