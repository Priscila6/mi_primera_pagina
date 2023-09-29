//alert("Hola este es mi Javascript");

//let miNombre= "Priscila";
//console.log (miNombre);



/*let sobreMi= document.querySelector("fuente_oscura");


let textoSobreMi= titulo.innerText;
console.log(textoSobreMi);

if (textoSobreMi=== "Mi nombre es Paola"){
    sobreMi.innerHTML= "otro";
}else{
    console.log ("no se cumple");
}*/

//Funciones

/*let nombre1= "Ailin";
let ciudad1= "VCP";
let empleo1= "developer";

let parrafo= document.querySelector(".fuenteOscura");

function cambioTexto(nombre,ciudad,empleo){
    let contenido = `Mi nombre es ${nombre}, soy de ${ciudad}, 
    provincia de Córdoba en Argentina.<br>
    En este momento estoy diseñando mi primer página web.
    Me encantaría convertirme en una ${empleo} que pueda
    realizar trabajo remoto.`;
 return contenido;
}

parrafo.innerHTML= cambioTexto(nombre1,ciudad1,empleo1);*/


const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");
      
function validarFormulario() {
        let warnings = "";
        let valido = true;
        parrafo.innerHTML = "";
      
        if (nombre.value.length < 4) {
          warnings += `El nombre debe contener más de 4 carcateres`;
          valido = false;
        }
      
        if (!valido) {
          parrafo.innerHTML = warnings;
        } else {
          parrafo.innerHTML = "Enviado";
        }
        return valido;
      }
      
form.addEventListener("submit", (e) => {
        if (validarFormulario()) {
          // Si la validación es exitosa, puedes enviar el formulario
          formulario.submit();
        } else {
          e.preventDefault(); // Evita que el formulario se envíe automáticamente
        }
      });     

let menu_responsive = document.querySelector(".checkbtn");
    menu_responsive.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
      };
