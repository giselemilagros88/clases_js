let titulo = document.getElementById("encabezado");

console.log(titulo);
console.log(titulo.innerHTML);

let concepto = document.getElementById("concepto");
concepto.style.color = "green";
console.log(concepto.innerText);
console.log(concepto.innerHTML);

// el metodo o funcion getElementsByTagName devuelve un array al igual que 
//getElementsByClassName, en cambio getElementsById devuelve el primer elemento que encuentra con ese ID
let definiciones = document.getElementsByTagName("div");
console.log(definiciones[0].innerHTML);

definiciones[0].style.textAlign = "right";

// ahora vamos agregar un nuevo parrafo

let nuevoParrafo = document.createElement("p");
let textoParrafo = document.createTextNode("Nuevo parrrafo de prueba");
let datoNuevo = document.getElementById("definiciones");
datoNuevo.appendChild(nuevoParrafo);
nuevoParrafo.appendChild(textoParrafo);

nuevoParrafo.style.backgroundColor ="red";
//console.log(definiciones[0].innerHTML);

// VAMOS A CREAR FILAS EN LAS TABLAS

function agregarFila(){
    let tabla = document.getElementById("tablaProducto");
   // console.log(tabla);
    let numFila = (tabla.rows.length) -1 ;
    
    // con innerHTML puedo agregar estructura html en una fila de una tabla que sabemos que es un tr
    tabla.insertRow(numFila).innerHTML = "<td class='codigo'>" + numFila + "</td><td>Coca-Cola</td><td>$185.00</td><td> <button onclick='eliminarFila(this)'>Eliminar</button></td>";
    
}

function eliminarFila(contenidoCelda){
   let row = contenidoCelda.parentNode.parentNode;
  //console.log(row);
   row.parentNode.removeChild(row);
  // luego de eliminar la fila, recorro todo y vuelvo a renumerar 
   //levanto la estructura de la tabla
   let tabla = document.getElementById("tablaProducto");
   
   // recorro desde la fila 1 hasta el largo de la tabla menos 1
   for (let i= 1 ; i < tabla.rows.length-1 ; i++){

      //console.log(document.getElementsByClassName("codigo"));
      // levanto un array de las celdas que tengan la class codigo
      let celda = document.getElementsByClassName("codigo");
      // a la primer posicion del array (sabemos que el array comienza en 0, entonces 
      // como la variable i la inicializamos en 1, le restamos -1)
      // a esa celda en cada iteracion, le ponemos como texto el valor del for
      celda[i-1].innerText = i ;
   }
   
    
}

