function ingresar() {
    let password = document.getElementById("idClave").value;
    if (password.length !== 4) {
      alert("La clave debe poseer 4 dígitos. Intente nuevamente.");
      let boton = document.getElementById("idBotonIngresar");
      boton.addEventListener("click", respuestaClick);
      function respuestaClick() {
        ingresar();
      }
    } else {
      window.location = "./paginas/calculo.html";
    }
}
  