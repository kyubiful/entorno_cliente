var user_choice = prompt('Escoge: piedra, papel o tijeras').toLowerCase();
var posibilitys = ['piedra','papel','tijeras'];

if(user_choice != 'piedra' && user_choice != 'papel' && user_choice != 'tijeras'){
  alert('Elección incorrecta');
} else {
  var random_choice = posibilitys[Math.floor(Math.random() * 3)];
  if(user_choice == random_choice){
    document.write(`Has elegido ${user_choice}.<br/><br/>El rival ha elegido ${random_choice}.<br/><br/>Habéis empatado.`)
  }else {
    switch(user_choice){
      case 'piedra':
	if(random_choice == 'tijeras'){
	  document.write(`Has elegido ${user_choice}.<br/><br/>El rival ha elegido ${random_choice}.<br/><br/>Has ganado.`)
	} else {
	  document.write(`Has elegido ${user_choice}.<br/><br/>El rival ha elegido ${random_choice}.<br/><br/>Has perdido.`)
	}
	break;
      case 'papel':
	if(random_choice == 'piedra'){
	  document.write(`Has elegido ${user_choice}.<br/><br/>El rival ha elegido ${random_choice}.<br/><br/>Has ganado.`)
	} else {
	  document.write(`Has elegido ${user_choice}.<br/><br/>El rival ha elegido ${random_choice}.<br/><br/>Has perdido.`)
	}
	break;
      case 'tijeras':
	if(random_choice == 'papel'){
	  document.write(`Has elegido ${user_choice}.<br/><br/>El rival ha elegido ${random_choice}.<br/><br/>Has ganado.`)
	} else {
	  document.write(`Has elegido ${user_choice}.<br/><br/>El rival ha elegido ${random_choice}.<br/><br/>Has perdido.`)
	}
	break;
    }
  }
}
