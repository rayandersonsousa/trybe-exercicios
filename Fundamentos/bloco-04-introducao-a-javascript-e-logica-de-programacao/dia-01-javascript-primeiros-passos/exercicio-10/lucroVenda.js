const valorCusto = 50;
const valorVenda = 90;
const impostoSobreOCusto = valorCusto*0.20;
const valorCustoTotal = valorCusto + impostoSobreOCusto;
const lucro = valorVenda - valorCustoTotal;

if (valorCusto <= 0 || valorVenda <= 0) {
    console.log("Erro! Encerrando programa")
} else {
    console.log("Lucro = ", lucro, "R$")
}