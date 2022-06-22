const peca = "peao";

switch (peca) {
    case "peao":
        console.log("frente")
        break;

    case "bispo":
        console.log("diagonais")
        break;
    
    case "torre":
        console.log("vertical e horizontal")
        break;

    case "cavalo":
        console.log("Duas casas, horizontal ou vertical")
        break;

    case "rainha":
        console.log("Em todas as direções")
        break;

    case "rei":
        console.log("Uma casa em toas as direções")
        break;

    default:
        console.log("Erro! Essa peça não existe no xadrez.")
}