import $ from 'jquery';
function formatear(dato) {
    return dato.replace(/./g, function(c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
      });
  }
  
  function calcular(){
    //Obtienes el valor
    var valor = document.getElementById("total").value;
    var valor2 = document.getElementById("comensales").value;
  
    var total= document.getElementById('total');
  
    //le descuentas el 8% y lo agregas al HTML
    var descuento = parseInt(valor)*valor2/100;
    var iva = parseInt(valor)*valor2*1.16/100;
    var t = iva - descuento;
          
    //agrega los resultados al DOM
    total.innerHTML = 'Total: ' + formatear(iva.toFixed(2));
  }