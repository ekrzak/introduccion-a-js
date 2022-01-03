//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $horas = document.querySelectorAll('#horas');
const $minutos = document.querySelectorAll('#minutos');
const $segundos = document.querySelectorAll('#segundos');

document.querySelector('button').onclick = () => {
   
    let horasTotales = 0;
    let minutosTotales = 0;
    let segundosTotales = 0;

    // Todas las nodeLists tienen la misma length => un for solamente para recorrer horas, minutos y segundos
    for (let i = 0; i < $horas.length; i++) {
        horasTotales += Number($horas[i].value);
        minutosTotales += Number($minutos[i].value);
        segundosTotales += Number($segundos[i].value);
    }
    // Conversión final
    let segundosFinal = horasTotales * 3600 + minutosTotales * 60 + segundosTotales;
    const horasDisplay = Math.floor(segundosFinal / 3600);
    const minutosDisplay = Math.floor(segundosFinal / 60) % 60;
    const segundosDisplay = Math.floor(segundosFinal % 60);


    // Display en el div
    document.querySelector('#resultado strong').textContent = `El tiempo total es de ${horasDisplay} horas ${minutosDisplay} minutos ${segundosDisplay} segundos`;
  
    return false;
}