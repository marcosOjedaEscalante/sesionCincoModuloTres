/* <!-- Objetos -->
<!-- nos permite el acceso a la defición de una clase -->
<!-- Se conforman por propiedades -->
<!-- Se conforman por funciones -->
<!-- Colección de estructuras de datos -->
<!-- Los objetos nos permiten representar cualquier cosa de la realidad -->
<!-- Clave: Valor -->
<!-- Parecidos a los que es JSON --> */

var medicoUno = {
    especialidad: 'Peldiatría',
    rut: '11111111-1',
    id: '1',
    nombrePrimer: 'Nombre médico uno',
    apellidoPrimer: 'Apellido médico uno',
    box: {
        id: '1',
        servicio: 'Pediatría',
        computador: {
            id: '456456'
        },
        insumos: [
            {
                insumoUno: 'Tijeras'
            },
            {
                insumoDos: 'Bisturí'
            },
            {
                insumoTres: 'Guantes'
            }
        ]
    },

    atender: function(){
        console.log('El médico se encuentra atendiendo');
    }
}

var medicoDos = {
    especialidad: 'Peldiatría',
    rut: '22222222-2',
    id: '2',
    nombrePrimer: 'Nombre médico dos',
    apellidoPrimer: 'Apellido médico dos',
    box: {
        id: '2',
        servicio: 'Pediatría',
        computador: {
            id: '456456'
        },
        insumos: [
            {
                insumoUno: 'Tijeras'
            },
            {
                insumoDos: 'Bisturí'
            },
            {
                insumoTres: 'Guantes'
            }
        ]
    },

    atender: function(){
        /* console.log('El médico se encuentra atendiendo'); */
        return 'El médico se encuentra atendiendo';
    }
}

console.log(medicoUno.nombrePrimer + ' ' + medicoUno.apellidoPrimer);
console.log(medicoDos.nombrePrimer + ' ' + medicoDos.apellidoPrimer);
console.log(medicoDos.atender());

