class Persona {
  static contadorperosonas = 0;
  constructor(nombre, apellido, edad) {
    this._idPersonas = ++Persona.contadorperosonas;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }
  get idpersona() {
    return this._idPersonas;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  get edad() {
    return this._edad;
  }
  set edad(edad) {
    this._edad = edad;
  }
}

let personas = [

];

const llenarTabla = document.querySelector("#listado");

function agregarPersonas() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;

  const persona = new Persona(nombre, apellido, edad);
  personas.push(persona);

  const row = document.createElement("tr");
  row.innerHTML = `
            <td>${persona.idpersona}</td>
            <td>${persona.nombre}</td> 
            <td>${persona.apellido}</td> 
            <td>${persona.edad}</td>
            `;
  llenarTabla.appendChild(row);
}

let eliminarPersona = function(){
  this.parentNode.remoChild(this)
}
for(var i = 1;i<= personas.children.length -1; i++){
personas.children[i].addEventListener("click",eliminarPersona)};