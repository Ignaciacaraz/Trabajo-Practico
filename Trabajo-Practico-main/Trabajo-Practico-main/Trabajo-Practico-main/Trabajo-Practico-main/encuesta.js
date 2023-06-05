
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("formulario");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita que el formulario se envíe normalmente

      // Guardar el valor en el localStorage
      localStorage.setItem("formularioCompletado", "1");

      // Redirigir a otra página
      window.location.href = "encuestas.html";
    });

    // Verificar si el formulario no se envió y guardar el valor correspondiente
    if (localStorage.getItem("formularioCompletado") !== "1") {
      localStorage.setItem("formularioCompletado", "2");
    }
  });

