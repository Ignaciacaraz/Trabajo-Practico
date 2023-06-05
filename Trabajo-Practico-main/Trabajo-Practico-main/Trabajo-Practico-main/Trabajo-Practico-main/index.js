alert("Cuentas: empleado o coordinador. Contraseñas: contraseña")
var cuerpoweb = document.body; 
var formulario =document.querySelector("form")
var empresa = document.querySelector("h1")
var nombre = document.querySelectorAll("input")


function cambiarModo() { 
    
    cuerpoweb.classList.toggle("oscuro"); 
    formulario.classList.toggle("oscuro");
    empresa.classList.toggle("oscuro");
    for (var i = 0; i < nombre.length; i++) {
        nombre[i].classList.toggle("oscuro");
      }

}                          





function submitForm() {
  var usuario = document.getElementById("usuario").value;
  var password  = document.getElementById("contraseña").value;
  if (usuario === "coordinador" && password=== "contraseña" ) {
    formulario.action = "inicio2.html";
  } 
  else if (usuario === "empleado" && password=== "contraseña") {
    formulario.action = "inicio.html";
  }
  else{
    alert("El usuario o la contraseña son incorrectas, intenta nuevamente");
  }
  formulario.submit();
} 