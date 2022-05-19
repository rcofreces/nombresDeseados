let dimensiónArreglo: number = Number(
  prompt("Ingrese la dimensión del arreglo")
);
let nombresArreglo: (string | null)[] = new Array(dimensiónArreglo);
let índice: number;

for (índice = 0; índice < dimensiónArreglo; índice++) {
  nombresArreglo[índice] = prompt(
    `Ingrese el nombre que va a ir en el lugar ${índice}`
  );
}

for (índice = 0; índice < dimensiónArreglo; índice++) {
  console.log(
    `La persona que ingresó en el lugar ${índice} es: ${nombresArreglo[índice]}`
  );
}
