var esPrimo = () => {
  var num = null;
  num = document.getElementById('primo').value;
  sol = document.getElementById('solucion');

  //Los numeros pares nunca son primos excepto el número 2
  //Un numero es primo cuando solo da resto cero al dividirse entre 1 o si mismo

  if (num != 2 && num%2==0){
    sol.innerHTML = 'El número no es primo';
  } else {
    for(var i=2; i<num; i++){
      if(num%i==0){
	sol.innerHTML = 'El número no es primo';
      }
    }
    sol.innerHTML = 'El número es  primo';
  }

}
