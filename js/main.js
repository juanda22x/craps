var tiro_1;
var tiro_2;
var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var turno = 0;
var suma;
var punto;

window.onload = init;

function init(){
    boton_tirar = document.getElementById("boton_tirar");
    boton_tirar.addEventListener("click",jugar);

    dado1 = document.getElementById("dado1");
    dado2 = document.getElementById("dado2");
    cerrar.addEventListener("click",cerrarVentana);
}

function tirardado(){
    return Math.floor(Math.random() * 6) + 1 ;
}

function actualizarDado(ref,cara){
    ref.style.backgroundPosition = posiciones[cara-1]+"px";
}

function jugar(){
    tiro_1 = tirardado();//Retorna un numero entre 1 y 6
    tiro_2 = tirardado();
    actualizarDado(dado1,tiro_1);
    actualizarDado(dado2,tiro_2);

    
    turno = turno+1;
    mostrarMensaje("Turno " + turno + ", No tomas shot🚫🥃 sigue");
    suma = tiro_1+tiro_2; 

    //Primer turno
    if (turno == 1 ){
        if (suma == 7 || suma == 11)
        {
            mostrarMensaje("Felicidades ganaste no tomas shot 🚫🥃");
            turno=0;
            punto=0;
        }
        if (suma == 2 || suma == 3 || suma == 12){
            mostrarMensaje("Mala suerte,no ganaste.Tomas un shot 🥃");
            turno=0;
            punto=0;
        }
            if(suma == 4 || suma == 5 || suma == 6 || suma == 8 || suma == 9 || suma == 10)
        {
            mostrarMensaje("Estas entre tomar shot o no tomar🥃, vuelve a sacar " + suma + " antes de sacar 7 y no tomaras shot🚫🥃");
            punto = suma;
            
        }
    }


    //Mas Turnos 
    if ( turno !== 1 && punto == suma  )
    {
        mostrarMensaje("Felicidades no tomaras shots 🚫🥃. Si tiras denuevo, se reiniciara el juego.");
        turno =0;
        punto = 0;
    }   
    if (turno !== 1 && suma == 7)   
    {
        mostrarMensaje("Tuviste Mala Suerte, tomaras 2 shots 🥃🥃.Vuelve a tirar para volver a jugar");
        turno =0;
        punto = 0;

    }
    
}
function mostrarMensaje (Mensaje){
    mensaje_texto.innerHTML= Mensaje;
    abrirVentana();
}

function abrirVentana(){  
  ventana.className = "ligthbox animate__animated animate__fadeIn";
}

function cerrarVentana(){
  ventana.className = "ligthbox hidden";
}