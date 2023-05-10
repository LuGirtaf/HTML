function apostar(){
    var a=Math.round(Math.random()*10);//Funcion random numero de 1 a 10 azar
    document.getElementById("resultado").value=a;
    var b=document.getElementById("apostado").value;
    //Validar si acerto numero
    if (a==b){
        document.getElementById("salida").value="GANÓ"
    } else {
        document.getElementById("salida").value="PERDIÓ"
    }
}
function cancel (){
    document.getElementById("apostado").value="";
    document.getElementById("resultado").value="";
    document.getElementById("salida").value="";
}