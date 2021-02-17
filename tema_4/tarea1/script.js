function Coche(marca, modelo, anyo) {
  this.marca = marca;
  this.modelo = modelo;
  this.anyo = anyo;
}

var coche1 = new Coche("Ferrari", "Scarglietti", 2010);
var coche2 = new Coche("BMW", "Z4", 2010);
var coche3 = new Coche("Seat", "Toledo", 1999);
var coche4 = new Coche("Fiat", "500", 1995);
var coches = [coche1, coche2, coche3, coche4];

document.write(`
<table>
   <tr>
     <th>Marca</th>
     <th>Modelo</th>
     <th>Año</th>
   </tr>
`);
coches.forEach((coche) => {
  document.write(`
    <tr>
      <td>${coche.marca}</td>
      <td>${coche.modelo}</td>
      <td>${coche.anyo}</td>
    </tr>
  `);
});
document.write("</table>");
