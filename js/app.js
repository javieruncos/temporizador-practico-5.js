
let contadorSegundos = 59;
let contador = 0;
let play;

function set (){
    let usuario = document.getElementById("numero-usuario").value;
    contador = usuario;
    let numeros = document.getElementById("numeros") 
    let tempo = document.getElementById("tempo")
    numeros.innerHTML = usuario;
       
        if(contadorSegundos > 0){
            tempo.innerHTML=contadorSegundos
            contadorSegundos--
        }
    
        if(contadorSegundos === 0){
            contadorSegundos = 60;
            contador--
            numeros.innerHTML = contador;
        }
        
        if(contadorSegundos < 10){
            tempo.innerHTML="0" + contadorSegundos;
        }

        if(contador < 10){
            numeros.innerHTML ="0"+ contador;
        }

        if(contador === 0){
            tempo.innerHTML="00"
            clearInterval(play)
        }
    
}

    
function comenzar(){
    play = setInterval(set,1000)
}


function stop(){
  clearInterval(play)
}



    


