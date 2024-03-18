let txtEntrada01 = "maiu ton";
let txtEntrada02 = "juli genia";
let txtSalida;

function concatInvert(p1, p2)
{
    let palabra;
    palabra = p1.concat(p2);
    let pal = palabra.split("");
    let rev = pal.reverse();
    let join = rev.join("");
    return join;  
}

txtSalida = concatInvert(txtEntrada01, txtEntrada02);
console.clear();
console.log(`Texto de entrada: "${txtEntrada01}" y "${txtEntrada02}"`);
console.log(`Texto de salida: "${txtSalida}"`);

