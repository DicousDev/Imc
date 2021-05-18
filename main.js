const campoPeso = document.getElementById("peso");
const campoAltura = document.getElementById("altura");
var imc = 0;

function ExibeImcComClassificao() {
    var mensagemImc = "Seu IMC é " + imc.toFixed(2) + ".";
    var classificao = ClassificaImc();
    window.confirm(mensagemImc + "\n" + classificao);
}

function CalculaImc() {
    const peso = Number(campoPeso.value);
    const altura = Number(campoAltura.value);

    if(altura != 0) {
        imc = peso / (altura ** 2);
    }
}

function ClassificaImc() {
    if(imc < 16) {
        return "Você está com Magreza grave.";
    }
    else if(imc < 17) {
        return "Você está com Magreza moderada.";
    }
    else if(imc < 18.5) {
        return "Você está com Magreza leve.";
    }
    else if(imc < 25) {
        return "Você está saudável.";
    }
    else if(imc < 30) {
        return "Você está Sobrepeso.";
    }
    else if(imc < 35) {
        return "Você está com Obesidade grau 1.";
    }
    else if(imc < 40) {
        return "Você está com Obesidade grau 2 (severa).";
    }
    else if(imc >= 40) {
        return "Você está com Obesidade Grau 3 (mórbida).";
    }
}