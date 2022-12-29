class Operacion {
    constructor(nombreIngresado) {
      this.nombre = nombreIngresado.toUpperCase();
    }
    calcularPlazoFijo(capitalIngresado, plazoIngresado) {
      this.capital = capitalIngresado;
      this.plazo = plazoIngresado;
      if (document.getElementById("radio1").checked == true) {
      this.resultado = (((this.capital * 0.67) / 12) * this.plazo).toFixed(2);
      localStorage.setItem("resultadoPlazoFijo", this.resultado); 
      } else {
      this.resultado = (((this.capital * 0.5) / 12) * this.plazo).toFixed(2);
      localStorage.setItem("resultadoPlazoFijo", this.resultado); 
      }
    }
  } 
function calcular() {
let capitalIngresado = Number(document.getElementById("idCapital").value);
let plazoIngresado = document.getElementById("idPlazo").value;
let nombreIngresado = document.getElementById("idNombre").value;
  
const operacion = new Operacion(nombreIngresado);
operacion.calcularPlazoFijo(capitalIngresado, plazoIngresado);

    let resultado = Number(localStorage.getItem("resultadoPlazoFijo")); 
    let monto = capitalIngresado + resultado;
    if (document.getElementById("radio1").checked == true) {
    let texto1 = document.getElementById("idTexto1");
      texto1.innerHTML = `${operacion.nombre}, EL RESULTADO DE TU INVERSIÓN EN PLAZO FIJO ES EL SIGUIENTE:`;
    let texto2 = document.getElementById("idTexto2");
      texto2.innerHTML = "CAPITAL INVERTIDO: $" + capitalIngresado + " (ARG)";
    let texto3 = document.getElementById("idTexto3");
      texto3.innerHTML =
        "PLAZO DE LA INVERSIÓN: " + plazoIngresado + " mes/meses.";
    let texto4 = document.getElementById("idTexto4");
      texto4.innerHTML = `MONTO DISPONIBLE AL CABO DE ${plazoIngresado} (mes/meses): $${monto} (ARG)`;
    let texto5 = document.getElementById("idTexto5");
      texto5.innerHTML = `INTERESES GANADOS: $${resultado} (ARG)`;
    let texto6 = document.getElementById("idTexto6");
      texto6.innerHTML = `Este es tu resultado en moneda nacional ARG  Para obtener el resultado en moneda U$S debe seleccionar la opcion "EN DÓLARES"`;
  } else {
    let texto1 = document.getElementById("idTexto1");
      texto1.innerHTML = ` ${operacion.nombre}, EL RESULTADO DE TU INVERSIÓN EN PLAZO FIJO ES EL SIGUIENTE:`;
    let texto2 = document.getElementById("idTexto2");
      texto2.innerHTML = "CAPITAL INVERTIDO: U$S" + capitalIngresado + " (U$S)";
    let texto3 = document.getElementById("idTexto3");
      texto3.innerHTML =
        "PLAZO DE LA INVERSIÓN: " + plazoIngresado + " mes/meses.";
    let texto4 = document.getElementById("idTexto4");
      texto4.innerHTML = `MONTO DISPONIBLE AL CABO DE ${plazoIngresado} (mes/meses): $${monto} (U$S)`;
    let texto5 = document.getElementById("idTexto5");
      texto5.innerHTML = `INTERESES GANADOS: $${resultado} (U$S)`;
    let texto6 = document.getElementById("idTexto6");
      texto6.innerHTML = `Este es tu resultado en moneda extranjera U$S Para obtener el resultado en moneda ARG debe seleccionar la opcion "EN PESOS"`;
  } 
  
localStorage.clear();   } 

let boton = document.getElementById("idBotonCalcular");
boton.addEventListener("click", respuestaClick);
function respuestaClick() {
calcular();}
  
  