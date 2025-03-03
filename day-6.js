let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let preguntaUno = '';
let preguntaDos = '';
let preguntaEliminar = '';
let alimento = '';
let alimentoEliminado = '';

function pregunta() {
    preguntaUno = prompt('¿Deseas agregar o eliminar un alimento a tu lista de compras? Responde "agregar" o "eliminar" según corresponda');
    while (preguntaUno === 'agregar') {
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

while (preguntaUno === 'eliminar') {
    alert(`Esta es la Lista de alimentos, Frutas: ${frutas}, Lacteos: ${lacteos}, Dulces: ${dulces}, Congelados: ${congelados}`);
    preguntaEliminar = prompt('¿En qué categoría está el alimento a eliminar?');

    if (preguntaEliminar === 'frutas') {
        alimentoEliminado = prompt('¿Qué alimento es?');
        
        if (frutas.includes(alimentoEliminado)) {
            frutas.splice(alimentoEliminado);
            pregunta();
        }
    } else if (preguntaEliminar === 'lacteos') {
        alimentoEliminado = prompt('¿Qué alimento es?');
        
        if (lacteos.includes(alimentoEliminado)) {
            lacteos.splice(alimentoEliminado);
            pregunta();
        }
    } else if (preguntaEliminar === 'dulces') {
        alimentoEliminado = prompt('¿Qué alimento es?');
        
        if (dulces.includes(alimentoEliminado)) {
            dulces.splice(alimentoEliminado);
            pregunta();
        }
    } else if (preguntaEliminar === 'congelados') {
        alimentoEliminado = prompt('¿Qué alimento es?');
        
        if (congelados.includes(alimentoEliminado)) {
            congelados.splice(alimentoEliminado);
            pregunta();
        }
    } else {
        alert('Ingresa una categoría válida');
        pregunta();
    }
    break;
}

while (preguntaUno != ('agregar' || 'eliminar')) {
    alert('Gracias por participar');
    break;
}

}

pregunta();
