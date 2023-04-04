let Calcular = document.getElementById("btn_calcular");


function calcImc()
{
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value /100;
    let resultado = document.getElementById("resultado");

    //condição 
    if(altura != "" && peso != "")
    {
        let imc = (peso / (altura*2)).toFixed(2);
        let mensagem = ""; 

        if(imc < 18.5)
        {
            mensagem = "Você está magro";
        }
        else if(imc < 25)
        {
            mensagem = "Você está com o peso ideal";
        }
        else if(imc < 30)
        {
            mensagem = "Você está com sobrepeso, procure a acad mais próxima!!!";
        }
        else if(imc < 40)
        {
            mensagem = "Está Obeso!! Vá MALHAAAARRRR";
        }
        else
        {
            mensagem = "Você é um planeta, e está explodindo!";
        }
        resultado.textContent = `Caro amigo(a) seu IMC é: ${imc}! ${mensagem}`
    }
    else
    {
        resultado.textContent = "Preencha todos os campos"
    }
}
Calcular.addEventListener('click', calcImc)