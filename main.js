const campoPeso = document.getElementById("peso");
const campoAltura = document.getElementById("altura");
var imc = 0;

function ExibeClassificao() {
    var classificao = ClassificaImc();
    window.confirm(classificao);
}

function CalculaImc() {
    const peso = Number(campoPeso.value);
    const altura = Number(campoAltura.value);

    if(altura != 0) {
        imc = peso / (altura ** 2);
    }
}

function ClassificaImc() {
    let messagemImc = "Seu IMC é " + imc.toFixed(2) + ".";

    if(imc < 16) {
        return messagemImc + "\n Você está com Magreza grave";
    }
    else if(imc < 17) {
        return messagemImc + "\n Você está com Magreza moderada";
    }
    else if(imc < 18.5) {
        return messagemImc + "\n Você está com Magreza leve";
    }
    else if(imc < 25) {
        return messagemImc + "\n Você está saudável.";
    }
    else if(imc < 30) {
        return messagemImc + "\n Você está Sobrepeso";
    }
    else if(imc < 35) {
        return messagemImc + "\n Você está com Obesidade grau 1";
    }
    else if(imc < 40) {
        return messagemImc + "\n Você está com Obesidade grau 2 (severa)";
    }
    else if(imc >= 40) {
        return messagemImc + "\n Você está com Obesidade Grau 3 (mórbida)";
    }
}