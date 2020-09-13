function sumar()
{



//recibir datos
let numeroA=parseInt(document.getElementById("Nuno").value)
let numerob=parseInt(document.getElementById("Ndos").value)

    //procesar datos
    let resultado =parseInt(numeroA +  numerob)
    //entregar resultados
    document.getElementById("resuloperacion").innerHTML=resultado
}
function multiplicar()
{



//recibir datos
let numeroA=parseInt(document.getElementById("Nuno").value)
let numerob=parseInt(document.getElementById("Ndos").value)

    //procesar datos
    let resultado =parseInt(numeroA * numerob)
    //entregar resultados
    document.getElementById("resuloperacion").innerHTML=resultado
}
// calcular areatriangulo
function area()
{



let altura= parseInt(document.getElementById("altura").value)
let base=parseInt(document.getElementById("base").value)
let resultado= parseInt(altura * base /2);
    document.getElementById("resuloperacion").innerHTML =resultado
}
//calcular area del circulo

