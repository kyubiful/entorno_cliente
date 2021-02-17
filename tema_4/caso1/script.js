function Edificio(calle, numero, cp) {
  this.calle = calle;
  this.numero = numero;
  this.cp = cp;
  this.propietarios = [
    ["VACÍO", 1, 1],
    ["VACÍO", 1, 2],
    ["VACÍO", 1, 3],
    ["VACÍO", 2, 1],
    ["VACÍO", 2, 2],
    ["VACÍO", 2, 3],
  ];
  this.agregarPlantasyPuertas = (numPlantas, puertas) => {
    this.numPlantas = numPlantas;
    this.puertas = puertas;
  };
  this.modificarNumero = (nuevoNumero) => {
    this.numero = nuevoNumero;
  };
  this.modificarCalle = (nuevaCalle) => {
    this.calle = nuevaCalle;
  };
  this.modificarCodigoPostal = (nuevoCP) => {
    this.cp = nuevoCP;
  };
  this.mostrarCalle = () => {
    return this.calle;
  };
  this.mostrarNumero = () => {
    return this.numero;
  };
  this.mostrarCodigoPostal = () => {
    return this.cp;
  };
  this.agregarPropietario = (nombre, planta, puerta) => {
    this.nombre = nombre;
    this.planta = planta;
    this.puerta = puerta;
    var msg = "";
    var valid = false;
    for (var i = 0; i < this.propietarios.length; i++) {
      if (
        this.propietarios[i][1] == this.planta &&
        this.propietarios[i][2] == this.puerta
      ) {
        this.propietarios[i][0] = this.nombre;
        this.propietarios[i][1] = this.planta;
        this.propietarios[i][2] = this.puerta;
        valid = true;
      }
    }
    if (valid == true) {
      msg = `${this.nombre} es ahora el propietario de la puerta: ${this.puerta} de la planta : ${this.planta}<br/>`;
      return document.write(msg);
    } else if (valid == false) {
      msg = document.write(`El piso o la planta no existen<br/>`);
      return msg;
    }
    return document.write("Error a la hora de agregar propietario <br/>");
  };
  this.mostrarPlantas = () => {
    var prop = "";
    for (var i = 0; i < this.propietarios.length; i++) {
      prop += `El propietario del piso ${this.propietarios[i][2]} de la planta ${this.propietarios[i][1]} es: ${this.propietarios[i][0]}<br/>`;
    }
    return prop;
  };
  return document.write(
    `<h3>Nuevo edificio construido en la calle: ${this.calle}, nº: ${this.numero}, CP: ${this.cp}</h3>`
  );
}

document.write("<h1>Gestión de edificios</h1>");
document.write("<h3>Añadimos un nuevo edificio...</h3>");

var edificio1 = new Edificio("Avd. El Cid", 31, 46860);

document.write(`
Edificios:<br/>
Calle: ${edificio1.mostrarCalle()}<br/>
Nº: ${edificio1.mostrarNumero()}<br/>
Código Postal ${edificio1.mostrarCodigoPostal()}<br/>
`);

document.write("<h3>Añadimos tres propietarios...</h3>");
edificio1.agregarPropietario("José Perez", 1, 1);
edificio1.agregarPropietario("Carmen Lopez", 1, 2);
edificio1.agregarPropietario("Manuel Martín", 2, 3);

document.write(
  `<h3>Lista de propietarios del edificio, calle: ${edificio1.mostrarCalle()} nº ${edificio1.mostrarNumero()} con Código Postal: ${edificio1.mostrarCodigoPostal()}</h3>`
);

document.write(edificio1.mostrarPlantas());
