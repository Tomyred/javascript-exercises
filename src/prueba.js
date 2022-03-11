let usuarios = {
    toni: {
        edad: 33,
        online: true,
    },
    emi: {
        edad: 25,
        online: true,
    },
    fran: {
        edad: 25,
        online: false,
    },
    agus: {
        edad: 24,
        online: true,
    },
    lu: {
        edad: 24,
        online: true,
    },
    dan: {
        edad: 24,
        online: true,
    },
};

function cuantosOnline(users) {}

function divisores(numero) {
    // La funcion llamada 'divisores' recibe como argumento un numero (entero)
    // y debe devolver un array con los divisores exactos de 'numero'.
    // Si el numero no tiene divisores ( exeptuando el 1 y el mismo ) deberia devolver el string 'Es primo'
    // Nota: El array no debe contener el 1 y el mismo numero.
    // Por ej:
    // divisores(15) devuelve [3, 5]
    // divisores(11) devuelve 'Es primo'
    // Tu código aca:
}

function palabraMasLarga(array) {
    // La funcion llamada 'palabraMasLarga' recibe un array 'array' de frases (strings) como parametro
    // y debe devolver la palabra mas larga entre todas las frases ( Es decir la palabra con mayor cantidad de caracteres)
    // Por ej:
    // palabraMasLarga(['hola esto string', 'frase con palabra']) debe devolver 'palabra'
    // Tu código aca:
}

function crearClaseEmprendedor() {
    class Emprendedor {
        constructor(nombre, apellido, libros, mascotas) {
            // El constructor de la clase Emprendedor recibe nombre (string), apellido (string), libros (array de objetos), mascotas (array de strings)
            // Inicializar las propiedades del emprendedor con los valores recibidos como argumento
            // Tu código aca:
        }

        addMascota(mascota) {
            // este método debe agregar una mascota (mascota) al arreglo de mascotas del emprendedor.
            // no debe retornar nada.
            // Tu código aca:
        }

        getMascotas() {
            // El método 'getMascotas' debe retornar la cantidad de mascotas que tiene el emprendedor.
            // Ej:
            // Suponiendo que el emprendedor tiene estas mascotas: ['perro', 'gato']
            // emprendedor.getMascotas() debería devolver 2
            // Tu código aca:
        }

        addBook(book, autor) {
            // El método 'addBook' recibe un string 'book' y un string 'autor' y debe agregar un objeto:
            // { nombre: book, autor: autor} al arreglo de libros del emprendedor.
            // No debe retornar nada.
            // Tu código aca:
        }

        getBooks() {
            // El método 'getBooks' debe retornar un arreglo con sólo los nombres del arreglo de libros del emprendedor.
            // Ej:
            // Suponiendo que el emprendedor tiene estos libros: [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}]
            // emprendedor.getBooks() debería devolver ['El señor de las moscas', 'Fundacion']
            // Tu código aca:
        }

        getFullName() {
            // El metodo getFullName debe retornar un string con el nombre y apellido del emprendedor.
            // ej:
            // Suponiendo que el emprendedor tiene: nombre: 'Elon' y apellido: 'Musk'
            // emprendedor.getFullName() deberia devolver 'Elon Musk'
            // Tu código aca:
        }
    }
    return Emprendedor;
}

function nFactorial(n) {
    // devolvé el factorial de n (n!)
    // ej:
    // el factorial de 3 es 6 (3 * 2 * 1)
}

// Implementar la función closureSum que recibe un parámetro (numFijo) y que debe retornar otra función
// que también debe recibir un parámetro y debe devolver la suma de este últimom parámetro con numFijo.
// Ejemplo 1:
//    var sumaCinco = closureSum(5);
//    sumaCinco(2);  --> Devolverá 7 (Ya que 2 + 5 = 7)
//    sumaCinco(11); --> Devolverá 16 (Ya que 11 + 5 = 16)
// Ejemplo 2:
//    var sumaDiez = closureSum(10);
//    sumaDiez(2);  --> Devolverá 12 (Ya que 2 + 10 = 12)
//    sumaDiez(11); --> Devolverá 21 (Ya que 11 + 10 = 21)

function closureSum(numFijo) {
    /* Tu codigo aqui */
}

function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
