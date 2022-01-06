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

function obtenerElMenor(arreglo) {
    let esElMenor = arreglo[0];
    for (let i = 0; i < arreglo.length; i++) {
        if (esElMenor > arreglo[i]) {
            esElMenor = arreglo[i];
        }
    }
    return esElMenor;
}

function obtenerElMayor(arreglo) {
    let esElMayor = arreglo[0];
    for (let i = 0; i < arreglo.length; i++) {
        if (esElMayor < arreglo[i]) {
            esElMayor = arreglo[i];
        }
    }    
    return esElMayor;
}

function obtenerElPromedio(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return (suma / arreglo.length);
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
        // Pasa a array los values de la NodeList de los inputs
        const listaDeEdadesListaDeNodos = document.querySelectorAll('.edades-personas');
        const listaDeEdades = [];
        console.log(listaDeEdadesListaDeNodos);
        for (i = 0; i < listaDeEdadesListaDeNodos.length; i++) {
            if (Number(listaDeEdadesListaDeNodos[i].value) >= 0) {
                listaDeEdades.push(Number(listaDeEdadesListaDeNodos[i].value));
            } else {
                listaDeEdadesListaDeNodos[i].disabled = true;
                listaDeEdadesListaDeNodos[i].style.backgroundColor = 'pink';
            }        
        }
        if (listaDeEdades.length !== listaDeEdadesListaDeNodos.length) { // Manda mensaje de alerta
            alert('Ingresaste números negativos; no serán tenido en cuenta para los cálculos');
        }         
        // Expresa los resultados
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
