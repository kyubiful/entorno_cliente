var getStringDate = () => {

  var date = document.getElementById('date').value;
  var result = document.getElementById('result');

  var regExp = /^([0-2][0-9]|3[0-1])(\/)(0[1-9]|1[0-2])\2(\d{4})$/;
  var isValid = regExp.test(date);

  if (!isValid){
    result.innerHTML = 'La fecha no es válida';
  } else {
    var date_splitted = date.split('/');
    var day = new Date(date_splitted[2],date_splitted[1]-1,date_splitted[0]);
    switch (day.getDay()){
      case 1:
	result.innerHTML = 'Lunes';
	break;
      case 2:
	result.innerHTML = 'Martes';
	break;
      case 3:
	result.innerHTML = 'Miércoles';
	break;
      case 4:
	result.innerHTML = 'Jueves';
	break;
      case 5:
	result.innerHTML = 'Viernes';
	break;
      case 6:
	result.innerHTML = 'Sábado';
	break;
      case 7:
	result.innerHTML = 'Domingo';
	break;
    }
  }
}
