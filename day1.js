let numeroUn = 1;
let stringUn = '1';
let numeroTreinta = 30;
let stringTreinta = parseInt('30');
let numeroDiez = 10;
let stringDiez = parseFloat('10');

// Comparativa 1
if (numeroUn == stringUn) {
  console.log(`Las variables numero ${numeroUn} y string ${stringUn} tienen el mismo valor, pero son tipos de datos diferentes`);

} else {
  console.log(`Las variables numero ${numeroUn} y string ${stringUn} no tienen el mismo valor`);

}

//Comparativa 2
if (numeroTreinta === stringTreinta) {
  console.log(`Las variables numero ${numeroTreinta} y string ${stringTreinta} tienen el mismo valor y el mismo tipo de dato`);

} else {
  console.log(`Las variables numero ${numeroTreinta} y string ${stringTreinta} no tienen el mismo tipo de dato`);

}

//Comparativa 3
if (numeroDiez === stringDiez) {
  console.log(`Las variables numero ${numeroDiez} y string ${stringDiez} tienen el mismo valor, pero son tipos de datos diferentes`)

} else {
  console.log(`Las variables numero ${numeroDiez} y string ${stringDiez} no tienen el mismo valor`);

}
