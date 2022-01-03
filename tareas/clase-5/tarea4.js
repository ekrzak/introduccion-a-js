//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


function obtenerElPromedio(x) {
    let suma = 0;
    for (let i = 0; i < x.length; i++) {
        suma += x[i];
    }
    return suma / x.length;
}

function obtenerElMenor(x) {
    let elMenor = x[0];
    for (let i = 1; i < x.length; i++) {
        if (elMenor > x[i]) {
            elMenor = x[i];
        } else {
            continue;
        }
    }
    return elMenor;
}

function obtenerElMayor(x) {
    let elMayor = x[0];
    for (let i = 1; i < x.length; i++) {
        if (elMayor > x[i]) {
            continue;
        } else {
            elMayor = x[i];
        }
    }
    return elMayor;
}

function obtenerElMasFrecuente(x) { // Este algoritmo lo saqué de StackOverflow y lo modifiqué para que use los nombres de variables que venía usando
    let otroArreglo = [];
    for (let i = 0; i < x.length; i++) { 
      let agregado = false;
      for (let j = 0; j < otroArreglo.length; j++) {
        if (!otroArreglo[j].includes(x[i])) {
          otroArreglo[j].push(x[i]); 
          agregado = true;
          break;
        }
      }
      if (!agregado) {
        otroArreglo.push([x[i]]);
      }
    }
    
    return otroArreglo[otroArreglo.length-1];
  }

document.querySelector('#calcular').onclick = () => {
    // Apunto hacia la ordered list y convierto la NodeList a array
    const $numeros = document.querySelectorAll('#numeros li');
    const arreglo = [];

    for (let i = 0; i < $numeros.length; i++) {
        arreglo.push(Number($numeros[i].innerHTML));
    }

    // Apunto a las etiquetas <em> y les modifico el texto usando template strings
    document.querySelector('#promedio').textContent = `El promedio es ${obtenerElPromedio(arreglo)}`;
    document.querySelector('#menor').textContent = `El número más pequeño es ${obtenerElMenor(arreglo)}`;
    document.querySelector('#mayor').textContent = `El número más grande es ${obtenerElMayor(arreglo)}`;
    document.querySelector('#frecuente').textContent = `El número más frecuente es ${(obtenerElMasFrecuente(arreglo)).toString()}`;
} 