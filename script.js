
const calcular = document.getElementById ('calcular');



function imc () {
    const nome = document.getElementById ('nome').value;
    const altura = document.getElementById ('altura').value;
    const peso = document.getElementById ('peso').value;
    const resultado = document.getElementById ('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';
        

        if (valorIMC < 18.5){
            classificacao = 'Está abaixo do peso.';
        }else if (valorIMC < 25){
            classificacao = 'Está com peso ideal.';
        }else if (valorIMC < 30){
            classificacao = 'Está levemente acima do peso!.';
        } else if (valorIMC < 35) {
            classificacao = 'Está com obesidade grau I.';
        } else if (valorIMC < 40){
            classificacao = 'Está com obesidade grau II.';
        } else{
            classificacao = 'Está com obesidade grau III (Morbida) cuidado!.'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao} `;

    }
}
calcular.addEventListener('click', imc);