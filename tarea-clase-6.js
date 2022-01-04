/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
const $listaIntegrantes = document.querySelector('#lista-integrantes');

function crearInputsPorIntegrante(cantidadIntegrantes) {
    
    for (let i = 0; i < cantidadIntegrantes; i++) {
        const nuevaEtiqueta = document.createElement('label');
        const textoEtiqueta = document.createTextNode(`Persona ${i+1}`);
        const saltoDeLinea = document.createElement('br');
        nuevaEtiqueta.appendChild(textoEtiqueta);
        nuevaEtiqueta.htmlFor = `edad-persona-${i+1}`;
        const nuevoInput = document.createElement('input');
        nuevoInput.id = `edad-persona-${i+1}`;
        nuevoInput.type = 'number';
        nuevoInput.className = 'edades-personas';
        nuevoInput.placeholder = 'Edad en años';
        $listaIntegrantes.appendChild(nuevaEtiqueta);
        $listaIntegrantes.appendChild(nuevoInput);
        $listaIntegrantes.appendChild(saltoDeLinea);
    }

    
}

function crearBotonDeCalculo() {
    const nuevoBoton = document.createElement('button'),
        botonLimpiar = document.createElement('button');
    nuevoBoton.type = 'submit';
    nuevoBoton.textContent = 'Calcular!';
    nuevoBoton.id = 'boton-calcular';
    botonLimpiar.type = 'submit';
    botonLimpiar.textContent = 'Limpiar';
    botonLimpiar.id = 'boton-limpiar';
    $listaIntegrantes.appendChild(nuevoBoton);
    $listaIntegrantes.appendChild(botonLimpiar);
}

function obtenerElMenor(listaDeNodos) {
    let esElMenor = listaDeNodos[0].value;
    for (let i = 1; i < listaDeNodos.length; i++) {
        if (esElMenor < listaDeNodos[i].value) {
            continue;
        } else {
            esElMenor = listaDeNodos[i].value;
        }
    }
    return Number(esElMenor);
}

function obtenerElMayor(listaDeNodos) {
    let esElMayor = listaDeNodos[0].value;
    for (let i = 1; i < listaDeNodos.length; i++) {
        if (esElMayor > listaDeNodos[i].value) {
            continue;
        } else {
            esElMayor = listaDeNodos[i].value;
        }
    }
    return Number(esElMayor);
}

function obtenerElPromedio(listaDeNodos) {
    let suma = 0;
    for (let i = 0; i < listaDeNodos.length; i++) {
        suma += Number(listaDeNodos[i].value);
    }
    return (suma / listaDeNodos.length);
}

document.querySelector('#ingresar').onclick = () => {
    const cantidadDeIntegrantes = $cantidadIntegrantes.value;
    // Crea los inputs para ingresar las edades
    crearInputsPorIntegrante(cantidadDeIntegrantes);
    document.querySelector('#ingresar').disabled = true;
    // Genera el boton de calcular y de limpiar
    crearBotonDeCalculo();
    // Ejecuta las acciones sobre el boton de calcular
    document.querySelector('#boton-calcular').onclick = () => {
        const listaDeEdades = document.querySelectorAll('.edades-personas');        
        document.querySelector('#mayor-edad').textContent = `La persona de mayor edad tiene ${obtenerElMayor(listaDeEdades)} años.`;
        document.querySelector('#menor-edad').textContent = `La persona de menor edad tiene ${obtenerElMenor(listaDeEdades)} años.`;
        document.querySelector('#promedio-edad').textContent = `El promedio de edad de las personas listadas es de ${obtenerElPromedio(listaDeEdades)} años`;
        return false;
    }
    // Ejecuta las acciones sobre el boton de limpiar: elimina los inputs y los resultados calculados. Vuelve a activar el boton#ingresar
    document.querySelector('#boton-limpiar').onclick = () => {
        while ($listaIntegrantes.firstChild) { // Elimina todo lo del nodo padre form $listaIntegrantes
            $listaIntegrantes.removeChild($listaIntegrantes.firstChild);
          }
        // Resetea los resultados de los textos
        document.querySelector('#mayor-edad').textContent = "";
        document.querySelector('#menor-edad').textContent = "";
        document.querySelector('#promedio-edad').textContent = "";
        // Vuelve a activar el boton#ingresar
        document.querySelector('#ingresar').disabled = false;
        // Vuelve el input al estado original
        $cantidadIntegrantes.value = null;

        return false;
    }


    return false;
}






/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
