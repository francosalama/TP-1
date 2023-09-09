const fs = require("fs");

function leerArchivoComoString(ruta) {
  return fs.readFile(ruta, "utf-8");
}

function escribirTextoEnArchivo(ruta, texto, flag) {
  if (flag && !fs.existsSync(ruta)) {
    fs.writeFile(ruta, texto);
  } else if (!flag && !fs.existsSync(ruta)) {
    throw new Error("El archivo no existe");
  } else {
    fs.writeFileSync(ruta, texto);
  }
}

function transformarStringEnArrayDeNumeros(texto, separador) {
    const textoSeparado = texto.split(separador);
    const numeros = [];
    for (const elemento of textoSeparado) {
        if (!isNaN(elemento)) {
            numeros.push(elemento);
        }
    }
    return numeros;
}

function transformarArrayDeNumerosAUnSoloString(array, separador) {
    return array.join(separador);
}

function combinarDosArrays(array1, array2) {
    const arrayCombinado = array1.concat(array2);
    const arraySinDuplicados = Array.from(new Set(arrayCombinado));
    const arrayOrdenado = arraySinDuplicados.sort((a, b) => a - b);
    return arrayOrdenado;
}

function combinarNArrays(arrays) {
    const arrayCombinado = [].concat(...arrays);;
    const arraySinDuplicados = Array.from(new Set(arrayCombinado));
    const arrayOrdenado = arraySinDuplicados.sort((a, b) => a - b);
    return arrayOrdenado;
}
