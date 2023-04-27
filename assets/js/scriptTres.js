var medico = new Object();
console.log(medico);

function Medico(rut, nombre, apellido){
    this.rut = rut;
    this.nombre = nombre;
    this.apellido = apellido;

    this.atender = function(){
        console.log('Está atendiendo ' + rut);
    }

}

var medicoUno = new Medico('11111111-1', 'Juan', 'Gonzalez');
console.log(medicoUno);
var medicoDos = new Medico('22222222-2', 'Felipe', 'Manriquez');
console.log(medicoDos);
var medicoTres = new Medico('33333333-3', 'Andrés', 'Canavaro');
console.log(medicoTres);

console.log(medicoUno.rut);
console.log(medicoDos.rut);
console.log(medicoTres.rut);

medicoUno.atender();
medicoDos.atender();
medicoTres.atender();