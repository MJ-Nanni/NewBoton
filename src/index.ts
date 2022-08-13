import "./styles.css";

let btn = document.getElementById("btn")
//Declaramos el boton como variable para llamarla
//del otro documento donde tiene todas las caracteristicas
let dato1 = document.getElementById("dato1")
//lo mismo, variable para traer el otro dato a este doc

btn.addEventListener("click" , () => {
  //el event listener es para q tengamos una reaccion
  //al momento q se hace algo, en este caso click
  console.log("El resultado es "dato1.value);
//entre comillas ponemos el texto q queremos visualizar
//en el console.log, antes del dato q estamos
//llamando desde ".value"


}