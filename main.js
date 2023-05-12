var btnEncriptar = document.querySelector('.encriptar')
var btnDesencriptar = document.querySelector('.desencriptar')
var btnCopiar = document.querySelector('#btnCopiar')
var textarea = document.querySelector('textarea')
window.onload = textarea.focus()
var contenedorDerechoSinTexto = document.querySelector('#contenedorDerechoSinTexto')
var imgSectionDerecho = document.querySelector("img[src='./assets/not_found.svg']")
var h2SectionDerecho = document.querySelector('h2')  
var pSectionDerecho = document.querySelector('.textoResultante')
var mensajeTextoCopiado = document.querySelector('#mensajeTextoCopiado')
mensajeTextoCopiado.style = "visibility: hidden";

function encriptaTexto (){
     var textoIngresado = textarea.value.toLowerCase();
     var aux = ""
     if(textoIngresado == ""){
          alert("No ha ingresado ningún texto para encriptar ❌")
     }
     for(var i = 0 ; i < textoIngresado.length ; i++){
          console.log("recorriendo letra:", textoIngresado[i]);
          if(textoIngresado[i] == "a"){
               aux += "ai"
          }else if(textoIngresado[i] == "e"){
               aux += "enter"
          }else if(textoIngresado[i] == "i"){
               aux += "imes"
          }else if(textoIngresado[i] == "o"){
               aux += "ober"
          }else if(textoIngresado[i] == "u"){
               aux += "ufat"
          }else{
               aux += textoIngresado[i]
          }
          console.log("valor de aux:" , aux);
     }
     imgSectionDerecho.setAttribute("src", "./assets/ok.svg")
     h2SectionDerecho.innerHTML = "El texto encriptado es"
     pSectionDerecho.innerHTML = aux
}

function copiarTexto (e) {
     var texto = pSectionDerecho.innerText
     var textoInicial = "Ingresa el texto que desees encriptar o desencriptar"
     console.log(texto);
     if(texto == textoInicial){
          alert('No hay ningún texto que copiar ❌')
     }
     navigator.clipboard.writeText(texto)
     mensajeTextoCopiado.style = "visibility: visible";
     setTimeout(mostrarMensaje, 500)
}

function mostrarMensaje(){
     if(mensajeTextoCopiado.innerHTML === "Texto copiado!"){
          mensajeTextoCopiado.style = "visibility: hidden"
     }
}

function desencriptar (){
     var textoDesencriptar = textarea.value.toLowerCase();
     desencriptarString(textoDesencriptar)
}

function desencriptarString (string){
     console.log(string);
     if(string.includes("ai", "enter", "imes", "ober", "ufat")){
          var auxA = string.replaceAll("ai","a")
          var auxE = auxA.replaceAll("enter","e")
          var auxI = auxE.replaceAll("imes","i")
          var auxO = auxI.replaceAll("ober","o")
          var auxU = auxO.replaceAll("ufat","u")
          console.log(auxU);
     }else if(string == ""){
          alert("No ha ingresado ningún mensaje ❌")
     }else if(!string.includes("ai", "enter", "imes", "ober", "ufat")){
          alert("El mensaje no está encriptado ❌")
     }
     imgSectionDerecho.setAttribute("src", "./assets/happy.svg")
     h2SectionDerecho.innerHTML = "El texto desencriptado es"
     pSectionDerecho.innerHTML = auxU
}

btnEncriptar.onclick = encriptaTexto;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiarTexto;