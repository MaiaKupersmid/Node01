import fs from 'fs';

function copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA)
{
    const read = fs.createReadStream(ARCHIVO_ENTRADA);
    const write = fs.createWriteStream(ARCHIVO_SALIDA);
    read.pipe(write)
}

const ARCHIVO_ENTRADA = "./archivo_entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);
