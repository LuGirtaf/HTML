//Funcion para digiturno preferencial
function prefer(){ 
    let num=1
    let res=true;
    while (num <=99 && res==true){
        nomuser=prompt(" INGRESE SU NOMBRE DE USUARIO");
        if (nomuser!=null){
            var n=num.toString().padStart(2, '0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"E"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//contador de turnos
        } else {
            alert("Error en turno...");
            break;
        }
    }
}
//funcion para Digiturno general
function user(){
    let num=1
    let res=true;
    while (num <=99 && res==true){
        nomuser=prompt(" INGRESE SU NOMBRE DE USUARIO");
        if (nomuser!=null){
            var n=num.toString().padStart(2, '0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"A"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//contador de turnos
        } else {
            alert("Error en turno...");
            break;
        }
    }
}