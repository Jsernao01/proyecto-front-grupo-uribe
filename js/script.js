import { REGEX_PATTERNS } from "../helpers/expresionesRegulares.js";

let inputs = document.querySelectorAll("form input")
console.log(inputs)

inputs.forEach((input)=>{
    input.addEventListener("blur", (e)=>{
        //console.log(e.target.value);
        switch(e.target.name){
            case "nombre":
                if(REGEX_PATTERNS.nombre.test(e.target.value)){
                    console.log("Cumple con los criterios de nombre");
                }else{
                    console.log("No cumple con los criterios de nombre");
                    document.getElementById("nombre").style.borderColor =  "red"; 
                } 
                break; 

            case "apellido":
                console.log("Este es el input apellido", e.target.value);
                break;

            case "documento":
                console.log("Este es el input documento", e.target.value);
                break;

        }

    }) 
    

}) 