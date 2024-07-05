document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const height = document.getElementById('Height').value.trim().replace(',', '.');
        const weight = document.getElementById('Weight').value.trim().replace(',', '.');

        if (isNaN(height) || isNaN(weight) || height <= 0 || height>=3 ||weight <= 0) {
            alert('Por favor, insira valores válidos para altura e peso.');
            return;
        }

        const imc = weight / (height * height);

        let resultado;
        switch (true) {
            case (imc < 18.50):
                resultado = 'Abaixo do peso';
                break;
            case (imc>=18.5&&imc < 25.0):
                resultado = 'Peso normal';
                break;
            case (imc>=25.0&&imc < 30.0):
                resultado = 'Sobrepeso';
                break;
            case (imc>=30.0&&imc < 35.0):
                resultado = 'Obesidade grau I';
                break;
            case (imc>=35.0&&imc <= 40):
                resultado = 'Obesidade grau II';
                break;
            default:
                resultado = 'Obesidade grau III';
        }

        var pesoElement = document.getElementById('resultWeight');
        var alturaElement = document.getElementById('resultHeight');
        var imcElement = document.getElementById('resultImc');
        var resultadoElement = document.getElementById('resultWeightBetween');

        pesoElement.textContent = (weight+"Kg"); 
        alturaElement.textContent = height; 
        imcElement.textContent = imc.toFixed(2);
        resultadoElement.textContent = resultado;
    });
});