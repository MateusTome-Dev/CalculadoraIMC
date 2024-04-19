var valorAltura=document.querySelector("main div.container h1.subTitle input");
var valorPeso=document.querySelector("main div.container h1.subTitle1 input");
var imc=document.querySelector("main div.container section.imc");
const calcular=document.querySelector("main section.block button");
calcular.addEventListener("click",()=>{
    imc.innerHTML=""
if(Number(valorAltura.valor)<0||Number(valorAltura.value)>3||Number(valorPeso.value)<0){
    alert("Digite uma altura e um peso valido");
} else {
    var alturaAoQuadrado = Math.pow(Number(valorAltura.value), 2);
    var calc = valorPeso.value / alturaAoQuadrado;
    var resultado=document.createElement("p");
    resultado.innerHTML ="Seu Imc é:"+ calc.toFixed(2);
    imc.appendChild(resultado);
}
if(calc<16){
    var resultado1=document.createElement("p");
    resultado1.innerHTML ="Você está em magreza grave";
    imc.appendChild(resultado1);
}
else if(calc>=16&&calc<=16.9){
    var resultado1=document.createElement("p");
    resultado1.innerHTML ="Você está em magreza moderada";
    imc.appendChild(resultado1);
}
else if(calc>=17&&calc<=18.5){
    var resultado1=document.createElement("p");
    resultado1.innerHTML ="Você está em magreza leve";
    imc.appendChild(resultado1);
}
else if(calc>=18.6&&calc<= 24.9){
    var resultado1=document.createElement("p");
    resultado1.innerHTML ="Você está em peso ideal";
    imc.appendChild(resultado1);
}
else if(calc>=25&&calc<= 29.9){
    var resultado1=document.createElement("p");
    resultado1.innerHTML ="Você está em sobrepeso";
    imc.appendChild(resultado1);
}
else if(calc>=30){
    var resultado1=document.createElement("p");
    resultado1.innerHTML ="Você está em obesidade";
    imc.appendChild(resultado1);
}
})
