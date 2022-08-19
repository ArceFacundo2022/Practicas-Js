// 1)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
// SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
// EL RESULTADO

// function ________(x,z){

// 	return
// }
alert("Punto N°1")
let num01 = parseInt(prompt("Ingrese el primer numero"))
let num02 = parseInt(prompt("Ingrese el segundo numero"))

function operacion (x, z){
    if (x < z){
        alert(`El resultado de La division es: ${z / x}`)
        return z / x
    } else {
        alert(`El resultado de la multiplicacion es: ${x * z}`)
        return x * z
    }
}

operacion(num01, num02)
// 2)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
// ES (SI ES STRING, NUMBER, BOOLEAN, ETC)

// function ________(a){
// 	return
// }

alert("Punto N°2")
let valor = true

function tipoValor(v){
    alert(`El valor ingresado es de tipo: ${typeof(valor)}`)
    return typeof(valor)
}

tipoValor(valor)

// 3)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
// - a y b SE SUMAN
// - EL RESULTADO DE LA SUMA SE RESTA CON c
// - LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
// - FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
// - SE RETORNA EL RESULTADO
// - TIP: RECORDAR EL ORDEN

// function ________(a,b,c,d,e,f){

// 	return
// }

alert("Punto N°3")
let a = prompt("Ingrese el valor de a")
let b = prompt("ingrese el valor de b")
let c = prompt("ingrese el valor de c")
let d = prompt("ingrese el valor de d")
let e = prompt("ingrese el valor de e")
let f = prompt("ingrese el valor de f")

function operaciones6 (A,B,C,D,E,F){
    let Result01 = ((((A+B)-C)*D/E)^F)

    alert(`El resultado es: ${Result01}`)
    return Result01
}

operaciones6(a,b,c,d,e,f)

// 4)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
// ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.

// function ________([]){

// 	return
// }

alert("Punto N°4")
const array01 = ["Gato", "Perro", "Tigre", "Caballo", "Mono", "Delfin", "Tortuga", "Perico"]
function tomarArray(array){
    const array02 = []
    for(let i = 1; i < 4; i++){
        array02.push(array[array.length - i])
    }
    alert(array02)
    return array02
}
tomarArray(array01)

// 5)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
// Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO

// function ________([]){

// 	return
// }

alert("Punto N°5")
const array03 = [90,34,22,60,55,41,11,8,44,78,20,1]

function ordenarArray(array){
    let aux = 0;
    alert(array)
    for (i = 0; i < array.length - 1; i++){
        for (k = 0; k < array.length - 1; k ++){
            if (array[k] > array[k+1]){
                aux = array[k];
                array[k] = array[k + 1]
                array[k+1] = aux
            }
        }
    }
    alert(array)
    return array
}

ordenarArray(array03)

// 6)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
// LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
// RETORNAR EL ARRAY FILTRADO

// function ________(a,b){

// 	return
// }

alert("Punto N°6")
const array07 = [1,2,5,7,3,8,4,6,3,9,4,6,4,0,7,4,5,9,9,8,2]
let elim = parseInt(prompt("ingrese un numero del 0 al 9"))

function Eliminar(array, valorE){
    let stop = false
    while (stop == false) {

        if (array.indexOf(valorE) !== -1){
            let valorF = array.indexOf(valorE)
            array.splice(valorF, 1)
        }else {
            stop = true;
        }
    }
    alert(array)
    return array
}

Eliminar(array07,elim)

// 7)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
// RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
// FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY.

// function ________([]){

// 	return
// }

alert("Punto N°7")
const array08 = [24,50,2,54,23,77,43,99,100,34,22,67,55,2,11]

function sumaArray(array){
    let suma = 0;
    let tamaño = array.length;
    for(i = 0; i < array.length; i++){
        suma += array[i]
    }
    alert(`La suma del array es: ${suma}`)
    promedioArray(suma, tamaño)
    return suma
}

function promedioArray(suma, tamaño){
    alert(`El promedio del array es: ${suma / tamaño}`)
    return suma / tamaño
}

sumaArray(array08)

// 8)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
// COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
// AL VALOR DEL STRING DEL ARGUMENTO

// function ________({}, str){

// 	return
// }

// Ej: objeto({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'nombre')
// 	Retorna 'Rosa'

alert("Punto 8")
const auto = {
    Marca: "Toyota",
    Color: "Rojo",
    Año: 2016,
    Estado: "Casi Nuevo",
    Manual: false
}

let KEY01 = "Color";

function KEY(coche, KEY01){

    let key00 = KEY01
    let retu = "0"
    for (KEY01 in coche){
        
        if (KEY01 == key00){
            alert(`La propiedad ${KEY01} es: ${coche[`${key00}`]}`)
            retu = coche[`${key00}`]
        }
    }
    return retu
}

KEY(auto, KEY01)

// 9)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
// LA SUMA DE TODOS SUS VALORES.

// function ________({}){

// 	return
// }

alert("Punto N°9")
const Calificaciones = {
    Matematica: 8,
    Fisica: 3,
    Lengua: 7,
    Ingles: 8,
    Arte: 6,
    Programacion: 10
}

function SumaObjectos (object){
    let sumaDeCalif = 0
    for (calif in object){
        sumaDeCalif += object[calif];
    }
    alert(sumaDeCalif)
    return sumaDeCalif
}
SumaObjectos(Calificaciones)