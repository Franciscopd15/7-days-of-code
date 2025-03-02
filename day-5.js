let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let preguntaUno = '';
let preguntaDos = '';
let alimento = '';

function pregunta() {
    preguntaUno = prompt('¿Deseas agregar un alimento a tu lista de compras? Responde Si para continuar y No para terminar');
    while (preguntaUno === 'Si') {
        preguntaDos = prompt('¿En qué categoría entra tu alimento: frutas, lacteos, dulces o congelados?');
    
        if (preguntaDos === 'frutas') {
            alimento = prompt('¿Qué alimento es?');
            frutas.push(alimento);
            console.log(`Frutas: ${frutas}`);
            pregunta();
        } else if (preguntaDos === 'lacteos') {
            alimento = prompt('¿Qué alimento es?');
            lacteos.push(alimento);
            console.log(`Lácteos: ${lacteos}`);
            pregunta();
        } else if (preguntaDos === 'dulces') {
            alimento = prompt('¿Qué alimento es?');
            dulces.push(alimento);
            console.log(`Dulces: ${dulces}`);
            pregunta();
        } else if (preguntaDos === 'congelados') {
            alimento = prompt('¿Qué alimento es?');
            congelados.push(alimento);
            console.log(`Congelados: ${congelados}`);
            pregunta();
        } else {
            alert('Ingresa una categoría válida');
            pregunta();
        }
    break;
}
}

pregunta();
