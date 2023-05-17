function Buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datos");//Asigna el nombre pelicula ingresado
    filter = input.value.toUpperCase();//convierte en mayúscula
    table = document.getElementById("tablaDatos");
    tr = table.getElementsByTagName("tr");//asigna todas las filas de la tabla a Arrays
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];// recorre toda la columna 0 (Nombre pelicula) en todas las filas
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) { //busca nombre pelicula en la tabla columma 0
          tr[i].style.display = "";
          } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }