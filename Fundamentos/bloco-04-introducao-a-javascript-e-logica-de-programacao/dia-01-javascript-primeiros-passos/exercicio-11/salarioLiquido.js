const salarioBruto = 2091;
let salarioBase;
let salarioLiquido;
let valorIR

if (salarioBruto <= 1556.94) {
    salarioBase = salarioBruto - (salarioBruto*0.08);
    console.log("Seu salário líquido é R$ ", salarioBase)
} else if (salarioBase >= 1556.95 && salarioBase <= 2594.92){
    salarioBase = salarioBruto - (salarioBruto*0.09);
    if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        valorIR = ((salarioBase*0.075) -142.80)
        salarioLiquido = salarioBase - valorIR;
    }
    console.log("Seu salário líquido é R$ ", salarioLiquido)
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - (salarioBruto*0.11);
    console.log("Seu salário líquido é R$ ", salarioLiquido)
} else {
    salarioBase = salarioBruto - 570.88;
    console.log("Seu salário líquido é R$ ", salarioLiquido)
}