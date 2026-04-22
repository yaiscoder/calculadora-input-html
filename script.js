const num1 = document.getElementById("numero1");
const num2 = document.getElementById("numero2");
const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");

const botones = document.querySelectorAll(".btn");

let activo = num1; 

num1.onclick = () => activo = num1;
num2.onclick = () => activo = num2;

botones.forEach(boton => {
    boton.addEventListener("click", () => {

        let valor = boton.textContent;

        if (!isNaN(valor)) {
            activo.value += valor;
        }

        if (valor === "+" || valor === "-" || valor === "*" || valor === "/"){
            operacion.value = valor;
            activo = num2; 
        }

        
        if (valor === "Reset") {
            num1.value = "";
            num2.value = "";
            operacion.value = "";
            resultado.value = "";
            activo = num1;
        }

        if (valor === "Del") {
            if (activo.value !== "") {
                activo.value = activo.value.slice(0, -1);
            } else {
                operacion.value = "";
            }
        }

        if (valor === "=") {
            calcular();
        }
    });
});

function calcular() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let op = operacion.value;

    let res;

    if (op === "+") res = n1 + n2;
    else if (op === "-") res = n1 - n2;
    else if (op === "*") res = n1 * n2;
    else if (op === "/") res = n2 !== 0 ? n1 / n2 : "Error";
    else res = "Error";

    resultado.value = res;
}
