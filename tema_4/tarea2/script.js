function Producto_alimenticio(cod, nombre, precio) {
  this.cod = cod;
  this.nombre = nombre;
  this.precio = precio;
  this.imprimirDatos = function () {
    var resultado = `
      Código: ${this.cod}<br/>
      Nombre: ${this.nombre}<br/>
      Precio: ${this.precio}€<br/>
    `;
    return resultado;
  };
}

var producto1 = new Producto_alimenticio(1, "Pan", 0.4);
var producto2 = new Producto_alimenticio(2, "Lentejas", 1.5);
var producto3 = new Producto_alimenticio(3, "Agua", 0.3);

var productos = [producto1, producto2, producto3];

for (var i = 0; i < productos.length; i++) {
  document.write(productos[i].imprimirDatos());
  document.write("**************************************<br/>");
}
