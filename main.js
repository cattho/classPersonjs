class Persona {
  constructor(edad, nombre, telefono) {
    let _edad = edad;
    let _nombre = nombre;
    let _telefono = telefono;

    this.getEdad = function() {
      return _edad;
    };

    this.setEdad = function(edad) {
      _edad = edad;
    };

    this.getNombre = function() {
      return _nombre;
    };

    this.setNombre = function(nombre) {
      _nombre = nombre;
    };

    this.getTelefono = function() {
      return _telefono;
    };

    this.setTelefono = function(telefono) {
      _telefono = telefono;
    };
  }
}

// Crear un objeto persona
const persona1 = new Persona(30, "Juan", "555-1234");

// Usar los métodos get y set para acceder a las propiedades privadas
console.log(persona1.getEdad()); // 30
console.log(persona1.getNombre()); // "Juan"
console.log(persona1.getTelefono()); // "555-1234"

persona1.setEdad(40);
persona1.setNombre("Pedro");
persona1.setTelefono("555-5678");

console.log(persona1.getEdad()); // 40
console.log(persona1.getNombre()); // "Pedro"
console.log(persona1.getTelefono()); // "555-5678"
