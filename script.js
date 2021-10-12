let calcular = document.querySelector('#calcular')

function imc(){
    let nome = document.querySelector('#nome').value
    let altura = document.querySelector('#altura').value
    let peso = document.querySelector('#peso').value
    let resultado = document.querySelector('.res')

    let valorIMC = (peso / (altura * altura)).toFixed(1)
    let classificacao = ''

    if (nome !== '' && altura !== '' && peso !== ''){
        
        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso!'
        } else if ( valorIMC < 25){
            classificacao = 'você está no peso ideal. Parabéns!'
        } else if ( valorIMC < 30){
            classificacao = 'levemente acima do peso.'
        } else if ( valorIMC < 35){
            classificacao = 'com obesidade grau 1.'
        } else if ( valorIMC < 40){
            classificacao = 'com obesidade grau 2.'
        } else {
            classificacao = 'com obesidade grau 3. Cuidado!'
        }

        resultado.innerHTML = `${nome} seu IMC é de ${valorIMC} e você está ${classificacao}`

    } else {
        alert('Preencha todos os campos!')
    }
}

calcular.addEventListener('click', imc)