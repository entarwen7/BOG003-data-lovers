import { filtroPeliculas } from './data.js';
import { ordenarAño } from './data.js';
import { reduceData } from './data.js';
import { promedioStudio } from './data.js';

import studio from './data/ghibli/ghibli.js';
let films = studio.films;

function tarjeta1(films) {
//1. recorre el array de Films 
  document.getElementById("container").innerHTML= "";
  const contenedorTarjeta = document.createElement("div");
  contenedorTarjeta.classList.add("contenedorTarjeta")

  for (var i = 0; i < films.length; i++) {
    let title = films[i].title;
    let year = films[i].release_date;
    let poster = films[i].poster;
    let points= films [i].rt_score;

    // Se crean elementos que van dentro del contenedorTarjeta
    //contenedorTarjeta.setAttribute("class","tbn") 
    const tarjeta = document.createElement("div");
    const imagen = document.createElement("img");
    const titulo = document.createElement("h3");
    const año = document.createElement("h4");
    const puntos = document.createElement("p");
   
    imagen.src = poster;
    titulo.textContent = title;
    año.textContent = year;
    puntos.textContent = "Puntuación: " + points;
    
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(año);
    tarjeta.appendChild(puntos);
    contenedorTarjeta.appendChild(tarjeta);
    //console.log(tarjeta, titulo, año, imagen);
    
  }
  return contenedorTarjeta
}

// Invoca la funcion tarjeta1
document.getElementById("link2").addEventListener("click", () => {
document.getElementById("container").appendChild(tarjeta1(films));
});
//invoca la funcion filter
const filtrarPeliculas = filtroPeliculas(films);
document.getElementById("filtro").addEventListener("click", () => {
document.getElementById("container").appendChild(tarjeta1(filtrarPeliculas));
});

//invoca funcion Sort
let ordenar= ordenarAño(films);
tarjeta1(ordenar);

//invoca funcion Reduce
document.getElementById("link3").addEventListener("click", () => {
document.getElementById("ranking").appendChild(tarjeta1(films))
document.getElementById("ranking").innerHTML = "";
});

const pruebafilter = reduceData(films)
document.getElementById("btn").addEventListener("click", () => {
document.getElementById("ranking").appendChild(tarjeta1(pruebafilter));
    
});
let promedio = promedioStudio(films);
document.getElementById("link3").addEventListener("click",() => {
document.getElementById("promedio_rt_score").innerHTML = promedio
//promedioStudio(films);
  
  });

//Permite llamar la Vista de Catologo
document.getElementById("link2").addEventListener("click", () => {
document.getElementById("cabecera").style.display = "none"
document.getElementById("catalogo").style.display = "block"
document.getElementById("topPeliculas").style.display = "none"
});
//Retorna a la pagina Principal


document.getElementById("link1").addEventListener("click", () => {
  document.getElementById("cabecera").style.display = "block"
  document.getElementById("catalogo").style.display = "none"
  document.getElementById("topPeliculas").style.display = "none"
});
//Permite llamar la vista topPeliculas
  document.getElementById("link3").addEventListener("click", () => {
  document.getElementById("cabecera").style.display = "none"
  document.getElementById("catalogo").style.display = "none"
  document.getElementById("topPeliculas").style.display = "block"

});

/* Toma el elemento container y lo sustituye por nuevos elementos, acumulando 
    los elementos para mostrarlo en el documento */
    //document.getElementById("container").innerHTML= "";
    /*document.getElementById("container").innerHTML +=`
    <div>
    <img src = ${poster}>
    <h3>${title}</h3>
    <p>${year}</p>
    </div>`*/
    //a los elemntos se le está asignando las variables

