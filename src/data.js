// Funcion filter, para filtrar las peliculas menores al año 2000
export function filtroPeliculas(films){ 
   /*let mayorMenor= films.filter((films) => films.release_date < 2000 );*/   
   let mayorMenor= films.filter((films) => {
    /*return films.release_date < 2000*/
    if(films.release_date < 2000) {
      return true
    }
    else{
      return false
    }
    });
  
   //console.log(mayorMenor)

  return mayorMenor;
}
//Prueba del arrow function = funcion funcion flecha
export const ordenarAño = (films) => {
  return films.sort((year1,year2) => year2.release_date - year1.release_date 
  )};
  
// prueba con función combinada filter y sort

export const reduceData = (films) => {
  return films.filter((films) => films.rt_score >= 93).sort((rt,rt1) => rt1.rt_score - rt.rt_score);
};

// Promedia el puntaje de las peliculas de Ghibli
   export const promedioStudio = (films) => { 
    const suma = films.reduce((acum,item) => {
      return acum = acum + parseInt(item.rt_score)/films.length;     
    },0);
    //console.log(suma)
   return suma
    
  };






  
//Funcion Sort, para ordenar de mayor a menor
/*export function ordenarAño(films){
  let ordenar =  films.sort((año1,año2) => {
    return año2.release_date - año1.release_date
  });
   //console.log(ordenar);
  return ordenar;

};*/









