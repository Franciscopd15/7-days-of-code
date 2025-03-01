//Declaración de Variables para que la función While pueda leerlas
let numeroSecreto = Math.floor(Math.random()*10)+1; //Generación de número pseudoaleatorio
let numeroUsuario = 0;
let intentos = 1; //variable para declarar los intentos que hace el usuario
let maximoIntentos = 3;

console.log(numeroSecreto); //saber el número que el sistema asigna aleatoriamente

/*Función para hacer un bucle o lazo, para que el sistema trabaje
hasta que la condición no se cumpla */

while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));
    
        //Condicionales anidados, una condición dentro de otra condición
        if (numeroUsuario == numeroSecreto) {
            //Acertamos, fue verdadera la condición
            //Utilizando operador terniario ? y :
            alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        } else {
            if (numeroUsuario > numeroSecreto) {
                alert('El número secreto es menor');
            } else {
                alert('El número secreto es mayor');
            }
            
            intentos++; //Forma de contador abreviada, más usada
            
            if (intentos > maximoIntentos) {
                alert(`Llegaste al número máximo de ${maximoIntentos} intentos, el número secreto es ${numeroSecreto}`);
                break; /*Esta función detiene el while cuando se
                cumple la condición dada en el if antes del break*/
            }
            
        }
    }
