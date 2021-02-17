window.onload = () => {
  var opa;
  var opb;
  var operation;

  var resultado = document.getElementById('resultado');
  var pulsaciones = document.getElementById('pulsaciones');
  var res = document.getElementById('c');
  var del = document.getElementById('del');
  var suma = document.getElementById('suma');
  var resta = document.getElementById('resta');
  var igual = document.getElementById('igual');
  var cero = document.getElementById('0');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');

  cero.onclick = () => {
    resultado.textContent = resultado.textContent+"0";
    pulsaciones.textContent = pulsaciones.textContent+"0";
  }
  uno.onclick = () => {
    resultado.textContent = resultado.textContent+"1";
    pulsaciones.textContent = pulsaciones.textContent+"1";
  }
  dos.onclick = () => {
    resultado.textContent = resultado.textContent+"2";
    pulsaciones.textContent = pulsaciones.textContent+"2";
  }
  tres.onclick = () => {
    resultado.textContent = resultado.textContent+"3";
    pulsaciones.textContent = pulsaciones.textContent+"3";
  }
  cuatro.onclick = () => {
    resultado.textContent = resultado.textContent+"4";
    pulsaciones.textContent = pulsaciones.textContent+"4";
  }
  cinco.onclick = () => {
    resultado.textContent = resultado.textContent+"5";
    pulsaciones.textContent = pulsaciones.textContent+"5";
  }
  seis.onclick = () => {
    resultado.textContent = resultado.textContent+"6";
    pulsaciones.textContent = pulsaciones.textContent+"6";
  }
  siete.onclick = () => {
    resultado.textContent = resultado.textContent+"7";
    pulsaciones.textContent = pulsaciones.textContent+"7";
  }
  ocho.onclick = () => {
    resultado.textContent = resultado.textContent+"8";
    pulsaciones.textContent = pulsaciones.textContent+"8";
  }
  nueve.onclick = () => {
    resultado.textContent = resultado.textContent+"9";
    pulsaciones.textContent = pulsaciones.textContent+"9";
  }

  suma.onclick = () => {
    opa = resultado.textContent;
    pulsaciones.textContent = pulsaciones.textContent+"+";
    operation = '+';
    clear();
  }
  resta.onclick =  () => {
    opa = resultado.textContent;
    pulsaciones.textContent = pulsaciones.textContent+"-";
    operation = '-';
    clear();
  }
  igual.onclick = () => {
    opb = resultado.textContent;
    resolve();
  }
  res.onclick = () => {
    pulsaciones.textContent = '';
    reset();
  } 
  del.onclick = () => {
    resultado.textContent = resultado.textContent.slice(0,-1);
    pulsaciones.textContent = pulsaciones.textContent.slice(0,-1);
  }
  function clear(){
    resultado.textContent = '';
  }

  function reset(){
    resultado.textContent = '';
    opa = 0;
    opb = 0;
    operation = '';
  } 
  function resolve(){
    var res = 0;
    switch(operation){
      case "+":
	res = parseFloat(opa) + parseFloat(opb);
	break;

      case "-":
	  res = parseFloat(opa) - parseFloat(opb);
	  break;
    }
    reset();
    resultado.textContent = res;
  }

};
