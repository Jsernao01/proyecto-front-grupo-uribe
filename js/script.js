import { REGEX_PATTERNS } from "../helpers/expresionesRegulares.js";

let inputs = document.querySelectorAll("form input")
console.log(inputs)

inputs.forEach((input)=>{
    input.addEventListener("blur", (e)=>{
        //console.log(e.target.value);
        switch(e.target.name){
            case "nombre":
                if(REGEX_PATTERNS.nombre.test(e.target.value)){
                    document.getElementById("nombre").classList.remove("Incorrecto"); 
                }else{
                
                    document.getElementById("nombre").classList.add("Incorrecto"); 
                } 
                break; 

            case "apellido":
                if(REGEX_PATTERNS.apellido.test(e.target.value)){
                    document.getElementById("apellido").classList.remove("Incorrecto"); 
                }else{
                    document.getElementById("apellido").classList.add("Incorrecto"); 
                }
                break;

            case "documento":
                if(REGEX_PATTERNS.documento.test(e.target.value)){
                    document.getElementById("documento").classList.remove("Incorrecto");
                }else{
                    document.getElementById("documento").classList.add("Incorrecto");
                }
                break;
            case "telefono":
                if(REGEX_PATTERNS.telefono.test(e.target.value)){   
                    document.getElementById("telefono").classList.remove("Incorrecto");    
                }else{
                    document.getElementById("telefono").classList.add("Incorrecto");    
                }
                break;

        }

    }) 
    

}) 
let usuarios = [];
let btnRegistro = document.getElementById("btnRegistro");
function registrarUsuario() {
    let formulario = document.querySelector("form");
    let datos = new FormData(formulario);
    let objeto = Object.fromEntries(datos);
    objeto.hobbies = datos.getAll("hobbies");

    let camposVacios = Object.values(objeto).some((valor) =>{
        return (valor === null || valor === undefined || valor.toString().trim() === "");
    });

    if (camposVacios) {
        let mensajeError = "No se permiten campos vacios, revisa nuevamente";
        let error = document.getElementById("error");
        error.textContent = mensajeError;
        error.classList.add("mensajeError");
    return;
    }
    error.classList.remove("mensajeError");
    error.textContent = "";
    usuarios.push(objeto);
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}
btnRegistro.addEventListener("click", registrarUsuario);